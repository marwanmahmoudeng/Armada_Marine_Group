import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // يخلّي السيرفر يفتح على الشبكة
    port: 5173       // نفس البورت اللي انتي متعودة عليه
  }
});
