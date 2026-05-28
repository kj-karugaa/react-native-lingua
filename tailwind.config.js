/** @type {import('tailwindcss').Config} */
// In Tailwind v4, theme tokens live in global.css @theme block.
// This file is only needed for content path scanning.
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};
