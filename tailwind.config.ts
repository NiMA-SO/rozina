import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // مسیر فایل‌های app
    "./pages/**/*.{js,ts,jsx,tsx}", // اگر هنوز pages داری
    "./components/**/*.{js,ts,jsx,tsx}", // کامپوننت‌ها
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};