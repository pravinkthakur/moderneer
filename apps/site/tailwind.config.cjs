const preset = require("@mod/config/tailwind-preset.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,mdx}"],
  presets: [preset],
  darkMode: "media",
  theme: { extend: {} },
  plugins: []
};
