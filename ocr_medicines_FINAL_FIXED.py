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
    نفصل الأعمدة: Item No / Medicine / Quantity / Unit
    بناءً على الموقع الأفقي (x_center)

    التقسيمة المحسّنة للصورة (RTL - من اليمين لليسار):
      - 0% - 10%  → رقم السطر (item number) - أقصى الشمال
      - 10% - 55% → اسم الدواء (drug name) - كامل بدون قطع
      - 55% - 75% → الكمية (quantity) - في النص
      - 75% - 100%→ الوحدة (unit) - أقصى اليمين
    """
    item_no_text = ""
    med_parts = []
    qty_text = ""
    unit_text = ""

    for e in row["entries"]:
        rel_x = e["x_center"] / float(width) if width > 0 else 0

        if rel_x < 0.10:
            item_no_text += " " + e["text"]
        elif rel_x < 0.55:
            # اسم الدواء - خد كل حاجة بدون قطع
            med_parts.append(e["text"])
        elif rel_x < 0.75:
            qty_text += " " + e["text"]
        else:
            unit_text += " " + e["text"]

    item_no_text = item_no_text.strip()
    med_text = " ".join(med_parts).strip()
    qty_text = qty_text.strip()
    unit_text = unit_text.strip()

    # استخراج رقم السطر
    item_no = None
    # لو فيه رقم في العمود المخصص
    if item_no_text:
        m = re.search(r"(\d+)", item_no_text)
        if m:
            try:
                item_no = int(m.group(1))
            except:
                pass

    # لو مفيش، جرب من أول السطر
    if item_no is None:
        m = re.match(r"^\s*(\d+)\s+", row["line_text"])
        if m:
            try:
                item_no = int(m.group(1))
            except:
                pass

    # استخراج الكمية من عمود الكمية فقط
    quantity = None
    if qty_text:
        # خد كل الأرقام من النص
        q_nums = re.findall(r"(\d+)", qty_text)
        if q_nums:
            # لو فيه أكتر من رقم، خد الأول (عادة هو الكمية)
            try:
                quantity = int(q_nums[0])
            except:
                pass

    # استخراج الوحدة - أولوية خاصة لـ STRIP
    unit = None

    # أولاً: دور على STRIP في عمود الوحدة (أولوية قصوى)
    if unit_text and re.search(r"\bSTRIP", unit_text, flags=re.IGNORECASE):
        unit = "STRIP"

    # ثانياً: لو مفيش STRIP، دور على أي وحدة تانية في عمود الوحدة
    if not unit and unit_text:
        for u in UNITS:
            if re.search(rf"\b{u}\b", unit_text, flags=re.IGNORECASE):
                unit = u.upper()
                break

    # ثالثاً: لو مفيش في عمود الوحدة، دور على STRIP في السطر كله
    if not unit and re.search(r"\bSTRIP", row["line_text"], flags=re.IGNORECASE):
        unit = "STRIP"

    # رابعاً: لو مفيش STRIP، خد آخر وحدة في السطر (الأقرب لليمين)
    if not unit:
        for u in UNITS:
            matches = list(re.finditer(rf"\b{u}\b", row["line_text"], flags=re.IGNORECASE))
            if matches:
                # خد آخر match (الأقرب لليمين في النص)
                unit = matches[-1].group(0).upper()
                break

    # اسم الدواء: خد النص من عمود الدواء كما هو
    drug_name = med_text

    # لو اسم الدواء فاضي، خد من السطر كله
    if not drug_name:
        drug_name = re.sub(r"^\s*\d+\s+", "", row["line_text"]).strip()
        # امسح الكمية والوحدة من الآخر لو موجودة
        if quantity and unit:
            drug_name = re.sub(rf"\s+{quantity}\s+{unit}\s*$", "", drug_name, flags=re.IGNORECASE).strip()
        elif unit:
            drug_name = re.sub(rf"\s+{unit}\s*$", "", drug_name, flags=re.IGNORECASE).strip()

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

        # فلتر 2: لازم يكون فيه حروف إنجليزية (أسماء الأدوية كلها إنجليزي)
        if not re.search(r"[A-Za-z]{3,}", row["line_text"]):
            print(f"   Row {idx+1}: [SKIP - NO ENGLISH] {row['line_text'][:50]}")
            continue

        # فلتر 3: استبعاد السطور اللي فيها نصوص عربية غريبة (RTL marks, etc)
        # لو فيه نصوص عربية كتير بدون إنجليزي واضح
        arabic_chars = len(re.findall(r"[أ-ي]", row["line_text"]))
        english_chars = len(re.findall(r"[A-Za-z]", row["line_text"]))
        if arabic_chars > english_chars and english_chars < 5:
            print(f"   Row {idx+1}: [SKIP - MOSTLY ARABIC] {row['line_text'][:50]}")
            continue

        cols = assign_columns_to_row(row, width=th_w + 2 * pad)

        # فلتر 4: لازم يكون فيه item number من 1-10 (عدد معقول للأدوية)
        if cols["item_no"] is None or cols["item_no"] < 1 or cols["item_no"] > 10:
            print(f"   Row {idx+1}: [SKIP - INVALID ITEM NO: {cols['item_no']}] {row['line_text'][:50]}")
            continue

        # فلتر 5: لازم يكون فيه اسم دواء واضح (على الأقل 3 حروف)
        if not cols["drug_name"] or len(cols["drug_name"]) < 3:
            print(f"   Row {idx+1}: [SKIP - NO DRUG NAME] {row['line_text'][:50]}")
            continue

        # فلتر 6: اسم الدواء لازم يكون فيه حروف إنجليزية
        if not re.search(r"[A-Za-z]{2,}", cols["drug_name"]):
            print(f"   Row {idx+1}: [SKIP - DRUG NAME NOT ENGLISH] {cols['drug_name']}")
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
