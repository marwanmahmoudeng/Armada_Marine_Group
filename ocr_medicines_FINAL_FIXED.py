import os
import glob
import re
from typing import List, Dict, Any

import cv2
import numpy as np
import pandas as pd

from paddleocr import PaddleOCR
from openpyxl import load_workbook
from openpyxl.styles import Font, PatternFill, Alignment
import paddle

# ======================================================
# GPU CONFIG
# ======================================================

paddle.set_device("gpu")

# ======================================================
# PATHS - غيّر المسارات دي حسب مكانك
# ======================================================

IMAGES_DIR = r"C:\ocr_project\images"
OUTPUT_EXCEL = r"C:\ocr_project\output_FINAL_FIXED.xlsx"

ROW_Y_THRESHOLD = 20   # المسافة الرأسية اللي بنجمع بيها البوكسات في نفس السطر

UNITS = [
    "STRIP", "STRIPS",
    "TAB", "TABS", "TABLET", "TABLETS",
    "CAP", "CAPS", "CAPSULE", "CAPSULES",
    "VIAL", "VIALS",
    "BOTTLE", "BOTTLES",
    "AMP", "AMPS", "AMPOULE", "AMPOULES",
]

HEADER_KEYWORDS_AR = ["اسم", "الدواء", "الكمية", "العدد", "الوحدة", "خصم"]
HEADER_KEYWORDS_EN = ["name", "drug", "quantity", "unit", "dose"]


# ======================================================
# OCR INIT
# ======================================================

def init_ocr_engines() -> tuple:
    """
    Initialize two OCR engines: English for medicines, Arabic for national ID
    """
    print("[DEBUG] Initializing OCR engines...")
    print("[DEBUG] Device:", paddle.device.get_device())

    ocr_en = PaddleOCR(
        use_angle_cls=False,
        lang="en",
        use_gpu=True,
    )

    ocr_ar = PaddleOCR(
        use_angle_cls=False,
        lang="arabic",
        use_gpu=True,
    )

    print("[DEBUG] OCR engines initialized on:", paddle.device.get_device())
    return ocr_en, ocr_ar


# ======================================================
# PREPROCESSING
# ======================================================

def deskew_image(gray: np.ndarray) -> np.ndarray:
    """يحاول يعدّل ميل الورقة."""
    _, th = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    coords = cv2.findNonZero(255 - th)
    if coords is None:
        return gray

    rect = cv2.minAreaRect(coords)
    angle = rect[-1]

    if angle < -45:
        angle = -(90 + angle)
    else:
        angle = -angle

    (h, w) = gray.shape[:2]
    M = cv2.getRotationMatrix2D((w // 2, h // 2), angle, 1.0)
    rotated = cv2.warpAffine(gray, M, (w, h), flags=cv2.INTER_CUBIC,
                             borderMode=cv2.BORDER_REPLICATE)
    return rotated


def preprocess_for_table(image_path: str) -> np.ndarray:
    """
    pipeline معالجة الصورة
    """
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise ValueError(f"Cannot read image: {image_path}")

    # denoise
    img = cv2.fastNlMeansDenoising(img, h=20)

    # deskew
    img = deskew_image(img)

    # sharpen
    kernel = np.array([[0, -1, 0],
                       [-1,  5, -1],
                       [0, -1, 0]])
    img = cv2.filter2D(img, -1, kernel)

    # normalize contrast
    img = cv2.normalize(img, None, 0, 255, cv2.NORM_MINMAX)

    # threshold
    _, img_bin = cv2.threshold(img, 0, 255,
                               cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    return img_bin


def find_table_roi(bin_img: np.ndarray) -> np.ndarray:
    """
    نحاول نحدد منطقة الجدول تلقائيًا باستخدام الخطوط الأفقية.
    """
    h, w = bin_img.shape

    # عكس الألوان عشان الخطوط تبقى بيضة
    inv = 255 - bin_img

    # morphology لالتقاط الخطوط الأفقية
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (w // 3, 3))
    horiz = cv2.morphologyEx(inv, cv2.MORPH_OPEN, kernel, iterations=1)

    contours, _ = cv2.findContours(horiz, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return bin_img

    # نختار أكبر كونتور في النصف السفلي من الورقة → الجدول
    candidates = []
    for cnt in contours:
        x, y, cw, ch = cv2.boundingRect(cnt)
        if y > h * 0.2 and ch > 10:
            area = cw * ch
            candidates.append((area, y, ch))

    if not candidates:
        return bin_img

    candidates.sort(reverse=True, key=lambda z: z[0])
    _, y, ch = candidates[0]

    pad = int(h * 0.02)
    y1 = max(0, y - pad)
    y2 = min(h, y + ch + pad)

    # خُد كامل عرض الصفحة
    table_roi = bin_img[y1:y2, 0:w]
    return table_roi


# ======================================================
# TEXT HELPERS
# ======================================================

def find_national_id_from_texts(texts: List[str]) -> str | None:
    """
    يدور على رقم قومي (14 رقم)
    """
    for t in texts:
        # جرب تاخد الأرقام كلها
        digits = re.sub(r"\D", "", t)
        if len(digits) == 14:
            return digits

        # لو الرقم طويل، شوف لو فيه 14 رقم متتالية
        matches = re.findall(r"\d{14}", t)
        if matches:
            return matches[0]

    # دور في كل النصوص مجمعة
    all_text = " ".join(texts)
    digits = re.sub(r"\D", "", all_text)

    # لو لقينا 14 رقم بالضبط
    if len(digits) == 14:
        return digits

    # لو أكتر، خد أول 14
    if len(digits) >= 14:
        # دور على pattern زي 28507... (أرقام الرقم القومي بتبدأ ب 2 أو 3)
        matches = re.findall(r"[23]\d{13}", digits)
        if matches:
            return matches[0]
        # لو مفيش، خد أول 14 رقم
        return digits[:14]

    return None


def is_header_line(line: str) -> bool:
    """
    يشوف لو السطر ده header ولا لأ
    """
    low = line.lower()
    for kw in HEADER_KEYWORDS_AR:
        if kw in line:
            return True
    for kw in HEADER_KEYWORDS_EN:
        if kw in low:
            return True
    return False


# ======================================================
# GROUPING LOGIC
# ======================================================

def group_ocr_boxes_by_row(ocr_result) -> List[Dict[str, Any]]:
    """
    تاخد نتيجة PaddleOCR وتجمع البوكسات في صفوف
    """
    if not ocr_result or len(ocr_result) == 0:
        return []

    entries = []

    page = ocr_result[0]
    for det in page:
        if len(det) != 2:
            continue
        box, (text, conf) = det
        if not text or not str(text).strip():
            continue

        text = str(text).strip()
        ys = [p[1] for p in box]
        xs = [p[0] for p in box]
        y_center = sum(ys) / len(ys)
        x_center = sum(xs) / len(xs)

        entries.append({
            "text": text,
            "conf": float(conf),
            "y_center": float(y_center),
            "x_center": float(x_center),
            "box": box,
        })

    if not entries:
        return []

    # sort by y
    entries.sort(key=lambda d: d["y_center"])

    rows = []
    current_row = []
    last_y = None

    for e in entries:
        if last_y is None:
            current_row = [e]
            last_y = e["y_center"]
            continue

        if abs(e["y_center"] - last_y) <= ROW_Y_THRESHOLD:
            current_row.append(e)
            last_y = (last_y + e["y_center"]) / 2.0
        else:
            rows.append(current_row)
            current_row = [e]
            last_y = e["y_center"]

    if current_row:
        rows.append(current_row)

    merged_rows = []
    for r in rows:
        r_sorted = sorted(r, key=lambda d: d["x_center"])

        line_text = " ".join(x["text"] for x in r_sorted).strip()
        if not line_text:
            continue

        merged_rows.append({
            "line_text": line_text,
            "y_center": sum([x["y_center"] for x in r_sorted]) / len(r_sorted),
            "entries": r_sorted,
        })

    return merged_rows


def assign_columns_to_row(row: Dict[str, Any], width: int) -> Dict[str, Any]:
    """
    استخراج معلومات الدواء من السطر باستخدام regex وموقع النص

    بدل استخدام نسب ثابتة، نستخدم pattern matching ذكي
    """
    line = row["line_text"].strip()

    # استخراج رقم السطر من أول السطر
    item_no = None
    m = re.match(r"^\s*(\d+)\s+", line)
    if m:
        try:
            item_no = int(m.group(1))
            # امسح رقم السطر من السطر
            line = line[m.end():].strip()
        except:
            pass

    # استخراج الكمية والوحدة من آخر السطر
    # Pattern: {اسم الدواء} {كمية} {وحدة}
    # مثال: PLAVIX 75 MG TABLET 2 STRIP
    quantity = None
    unit = None
    drug_name = line

    # أولاً: دور على STRIP في آخر السطر
    strip_match = re.search(r"\s+(\d+)\s+(STRIP)S?\s*$", line, flags=re.IGNORECASE)
    if strip_match:
        quantity = int(strip_match.group(1))
        unit = "STRIP"
        # امسح الكمية والوحدة من اسم الدواء
        drug_name = line[:strip_match.start()].strip()
    else:
        # دور على أي وحدة تانية
        for u in UNITS:
            pattern = rf"\s+(\d+)\s+({u})S?\s*$"
            match = re.search(pattern, line, flags=re.IGNORECASE)
            if match:
                quantity = int(match.group(1))
                unit = match.group(2).upper()
                drug_name = line[:match.start()].strip()
                break

    # لو مفيش كمية ووحدة في آخر السطر، دور في السطر كله
    if quantity is None or unit is None:
        # دور على STRIP في أي مكان
        if re.search(r"\bSTRIP", line, flags=re.IGNORECASE):
            unit = "STRIP"
            # حاول تستخرج الكمية قبل STRIP
            qty_match = re.search(r"(\d+)\s+STRIP", line, flags=re.IGNORECASE)
            if qty_match:
                quantity = int(qty_match.group(1))
                # امسح الكمية والوحدة
                drug_name = re.sub(r"\s*\d+\s+STRIP\s*", "", line, flags=re.IGNORECASE).strip()
        else:
            # دور على أي وحدة
            for u in UNITS:
                if re.search(rf"\b{u}\b", line, flags=re.IGNORECASE):
                    unit = u.upper()
                    # حاول تستخرج الكمية قبل الوحدة
                    qty_match = re.search(rf"(\d+)\s+{u}", line, flags=re.IGNORECASE)
                    if qty_match:
                        quantity = int(qty_match.group(1))
                        # امسح الكمية والوحدة
                        drug_name = re.sub(rf"\s*\d+\s+{u}\s*", "", line, flags=re.IGNORECASE).strip()
                    break

    # تنظيف اسم الدواء من أي أرقام أو وحدات زيادة
    drug_name = drug_name.strip()

    return {
        "item_no": item_no,
        "drug_name": drug_name,
        "quantity": quantity,
        "unit": unit,
        "raw_line": row["line_text"],
    }


# ======================================================
# MAIN PER-IMAGE LOGIC
# ======================================================

def process_single_image(ocr_en: PaddleOCR, ocr_ar: PaddleOCR, image_path: str) -> Dict[str, Any]:
    """
    معالجة صورة واحدة
    """
    print(f"\n{'='*60}")
    print(f"[IMAGE] {os.path.basename(image_path)}")
    print(f"{'='*60}")

    orig = cv2.imread(image_path)
    if orig is None:
        print(f"[WARN] Cannot read image: {image_path}")
        return {
            "image_name": os.path.basename(image_path),
            "national_id": None,
            "medicines": [],
        }

    # ======================================================
    # استخراج الرقم القومي باستخدام OCR عربي
    # ======================================================
    print("[STEP 1] Extracting National ID...")

    # جرب OCR عربي على الصورة كلها
    ar_result = ocr_ar.ocr(orig, cls=False)
    ar_texts = []
    for page in ar_result:
        for box, (text, conf) in page:
            if text and str(text).strip():
                ar_texts.append(str(text))

    # جرب OCR إنجليزي كمان للأرقام
    en_result = ocr_en.ocr(orig, cls=False)
    en_texts = []
    for page in en_result:
        for box, (text, conf) in page:
            if text and str(text).strip():
                en_texts.append(str(text))

    # دمج كل النصوص
    all_texts = ar_texts + en_texts

    national_id = find_national_id_from_texts(all_texts)

    if national_id:
        print(f"   ✓ National ID found: {national_id}")
    else:
        print(f"   ✗ National ID not found")
        print(f"   Available texts: {all_texts[:10]}")  # اطبع أول 10 نصوص للـ debug

    # ======================================================
    # استخراج جدول الأدوية
    # ======================================================
    print("[STEP 2] Processing medicine table...")

    bin_img = preprocess_for_table(image_path)
    table_roi = find_table_roi(bin_img)
    th_h, th_w = table_roi.shape

    # padding
    pad = 10
    table_padded = cv2.copyMakeBorder(
        table_roi, pad, pad, pad, pad,
        borderType=cv2.BORDER_CONSTANT,
        value=255,
    )

    # OCR على الجدول
    table_result = ocr_en.ocr(table_padded, cls=False)
    merged_rows = group_ocr_boxes_by_row(table_result)

    print(f"   Found {len(merged_rows)} rows in table")

    medicines = []
    for idx, row in enumerate(merged_rows):
        # skip header
        if is_header_line(row["line_text"]):
            print(f"   Row {idx+1}: [HEADER] {row['line_text'][:50]}")
            continue

        # فلتر 1: استبعاد التواريخ (pattern: DD/MM/YYYY HH:MM)
        if re.search(r"\d{2}/\d{2}/\d{4}", row["line_text"]):
            print(f"   Row {idx+1}: [SKIP - DATE] {row['line_text'][:50]}")
            continue

        # فلتر 2: استبعاد سطور الوحدة لوحدها (مثل: "3 STRIP" أو "6 STRIP")
        # السطر لو كان رقم + STRIP فقط، ده مش دواء
        if re.match(r"^\s*\d+\s+(STRIP|TAB|TABLET|CAP|VIAL|AMP)\s*$", row["line_text"], flags=re.IGNORECASE):
            print(f"   Row {idx+1}: [SKIP - UNIT ONLY] {row['line_text'][:50]}")
            continue

        # فلتر 3: لازم يكون فيه حروف إنجليزية واضحة (أسماء الأدوية كلها إنجليزي)
        # على الأقل 5 حروف إنجليزية متتالية
        if not re.search(r"[A-Za-z]{5,}", row["line_text"]):
            print(f"   Row {idx+1}: [SKIP - NO CLEAR ENGLISH] {row['line_text'][:50]}")
            continue

        # فلتر 4: استبعاد النصوص الغريبة (حروف عشوائية، RTL marks)
        # لو معظم الكلمات قصيرة جداً أو فيها حروف صغيرة/كبيرة عشوائية
        words = re.findall(r"[A-Za-z]+", row["line_text"])
        if words:
            # لازم يكون فيه على الأقل كلمة واحدة طويلة (5+ حروف)
            long_words = [w for w in words if len(w) >= 5]
            if len(long_words) == 0:
                print(f"   Row {idx+1}: [SKIP - WEIRD TEXT] {row['line_text'][:50]}")
                continue

            # لو فيه كلمات كتير بحروف صغيرة/كبيرة متناوبة (مثل: iu, di, yo)، ده نص غريب
            weird_pattern_count = 0
            for w in words:
                # كلمة قصيرة (2-3 حروف) بحروف صغيرة/كبيرة عشوائية
                if len(w) <= 3 and re.search(r"[a-z][A-Z]|[A-Z][a-z][A-Z]", w):
                    weird_pattern_count += 1

            # لو أكتر من 30% من الكلمات غريبة
            if len(words) > 0 and weird_pattern_count / len(words) > 0.3:
                print(f"   Row {idx+1}: [SKIP - MIXED CASE GIBBERISH] {row['line_text'][:50]}")
                continue

        # فلتر 5: استبعاد السطور اللي فيها نصوص عربية غريبة (RTL marks, etc)
        # لو فيه نصوص عربية كتير بدون إنجليزي واضح
        arabic_chars = len(re.findall(r"[أ-ي]", row["line_text"]))
        english_chars = len(re.findall(r"[A-Za-z]", row["line_text"]))
        if arabic_chars > english_chars and english_chars < 5:
            print(f"   Row {idx+1}: [SKIP - MOSTLY ARABIC] {row['line_text'][:50]}")
            continue

        cols = assign_columns_to_row(row, width=th_w + 2 * pad)

        # فلتر 6: لازم يكون فيه item number من 1-10 (عدد معقول للأدوية)
        if cols["item_no"] is None or cols["item_no"] < 1 or cols["item_no"] > 10:
            print(f"   Row {idx+1}: [SKIP - INVALID ITEM NO: {cols['item_no']}] {row['line_text'][:50]}")
            continue

        # فلتر 7: لازم يكون فيه اسم دواء واضح (على الأقل 4 حروف)
        if not cols["drug_name"] or len(cols["drug_name"]) < 4:
            print(f"   Row {idx+1}: [SKIP - NO DRUG NAME] {row['line_text'][:50]}")
            continue

        # فلتر 8: اسم الدواء لازم يكون فيه حروف إنجليزية واضحة (على الأقل 4 حروف)
        if not re.search(r"[A-Za-z]{4,}", cols["drug_name"]):
            print(f"   Row {idx+1}: [SKIP - DRUG NAME NOT ENGLISH] {cols['drug_name']}")
            continue

        # فلتر 9: اسم الدواء ما يبقاش مجرد رقم + وحدة
        if re.match(r"^\s*\d+\s+(STRIP|TAB|TABLET|CAP|VIAL|AMP)\s*$", cols["drug_name"], flags=re.IGNORECASE):
            print(f"   Row {idx+1}: [SKIP - NOT A DRUG NAME] {cols['drug_name']}")
            continue

        # فلتر 10: اسم الدواء لازم يبدأ بحرف (مش رمز غريب زي : أو .)
        # لكن ممكن يبدأ برقم لو الكود مشالوش صح
        if re.match(r"^[^A-Za-z0-9]", cols["drug_name"]):
            print(f"   Row {idx+1}: [SKIP - INVALID START] {cols['drug_name']}")
            continue

        # فلتر 11: اسم الدواء مينفعش يبقى كله أرقام
        if re.match(r"^\d+$", cols["drug_name"]):
            print(f"   Row {idx+1}: [SKIP - ONLY NUMBERS] {cols['drug_name']}")
            continue

        print(f"   Row {idx+1}: [MEDICINE] {cols['drug_name'][:30]} | Qty: {cols['quantity']} | Unit: {cols['unit']}")

        medicines.append({
            "row_index": cols["item_no"],
            "drug_name": cols["drug_name"],
            "quantity": cols["quantity"],
            "unit": cols["unit"],
            "raw_line": cols["drug_name"],  # RAW = اسم الدواء الكامل
        })

    # ترتيب بالـ item_no
    medicines.sort(key=lambda m: (m["row_index"] if m["row_index"] is not None else 9999))

    print(f"\n[RESULT] Found {len(medicines)} medicines")
    for m in medicines:
        print(f"   - {m['drug_name']} (Qty: {m['quantity']}, Unit: {m['unit']})")

    return {
        "image_name": os.path.basename(image_path),
        "national_id": national_id,
        "medicines": medicines,
    }


# ======================================================
# EXCEL FORMAT
# ======================================================

def format_excel(path: str) -> None:
    """
    تنسيق ملف الإكسل
    """
    wb = load_workbook(path)
    ws = wb.active

    header_fill = PatternFill("solid", fgColor="4472C4")
    header_font = Font(bold=True, color="FFFFFF")

    for cell in ws[1]:
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center")

    # Auto-adjust column widths
    for column in ws.columns:
        max_length = 0
        column_letter = column[0].column_letter
        for cell in column:
            try:
                if len(str(cell.value)) > max_length:
                    max_length = len(cell.value)
            except:
                pass
        adjusted_width = min(max_length + 2, 50)
        ws.column_dimensions[column_letter].width = adjusted_width

    wb.save(path)


# ======================================================
# BATCH PROCESS
# ======================================================

def process_folder(images_dir: str, output_excel: str) -> None:
    """
    معالجة كل الصور في المجلد
    """
    paths = sorted(
        glob.glob(os.path.join(images_dir, "*.jpg")) +
        glob.glob(os.path.join(images_dir, "*.jpeg")) +
        glob.glob(os.path.join(images_dir, "*.png"))
    )

    print(f"\n{'='*60}")
    print(f"🔥 OCR Medicine Extraction Tool - FINAL FIXED VERSION 🔥")
    print(f"{'='*60}")
    print(f"Images directory: {images_dir}")
    print(f"Output file: {output_excel}")
    print(f"Found {len(paths)} images")
    print(f"{'='*60}\n")

    if len(paths) == 0:
        print("[ERROR] No images found!")
        return

    # Initialize OCR engines
    ocr_en, ocr_ar = init_ocr_engines()

    rows = []

    for idx, p in enumerate(paths, 1):
        print(f"\nProcessing image {idx}/{len(paths)}")
        res = process_single_image(ocr_en, ocr_ar, p)

        for m in res["medicines"]:
            rows.append({
                "Image": res["image_name"],
                "National ID": res["national_id"] or "Not Found",
                "Item No": m["row_index"] if m["row_index"] is not None else "",
                "Medicine": m["drug_name"],
                "Quantity": m["quantity"] if m["quantity"] is not None else "",
                "Unit": m["unit"] or "",
                "Raw": m["raw_line"],
            })

    # Save to Excel
    df = pd.DataFrame(rows)
    df.to_excel(output_excel, index=False)
    format_excel(output_excel)

    device = paddle.device.get_device()
    print(f"\n{'='*60}")
    print(f"✅ [SUCCESS] Processing complete!")
    print(f"{'='*60}")
    print(f"Total images processed: {len(paths)}")
    print(f"Total medicines extracted: {len(rows)}")
    print(f"Output saved to: {output_excel}")
    print(f"Running on: {device}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    process_folder(IMAGES_DIR, OUTPUT_EXCEL)
