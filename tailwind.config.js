/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Blue
        "-primary-100": "#cffafe",
        "-primary-200": "#a5f3fc",
        "-primary-300": "#67e8f9",
        "-primary-400": "#22d3ee",
        "-primary-500": "#06b6d4",
        "-primary-600": "#0891b2",
        "-primary-700": "#0e7490",
        "-primary-800": "#155e75",
        "-primary-900": "#164e63",
        //purple
        "primary--100": "#fae8ff",
        "primary--200": "#f5d0fe",
        "primary--300": "#f0abfc",
        "primary--400": "#e879f9",
        "primary--500": "#d946ef",
        "primary--600": "#c026d3",
        "primary--700": "#a21caf",
        "primary--800": "#86198f",
        "primary--900": "#701a75",
        //green
        "primary-100": "#d1fae5",
        "primary-200": "#a7f3d0",
        "primary-300": "#a7f3d0",
        "primary-400": "#34d399",
        "primary-500": "#10b981",
        "primary-600": "#059669",
        "primary-700": "#047857",
        "primary-800": "#065f46",
        "primary-900": "#064e3b",
        "grey-50": "#f8fafc",
        "grey-100": "#f1f5f9",
        "grey-200": "#e2e8f0",
        "grey-300": "#cbd5e1",
        "grey-400": "#94a3b8",
        "grey-500": "#64748b",
        "grey-600": "#475569",
        "grey-700": "#334155",
        "grey-800": "#1e293b",
        "grey-900": "#0f172a",
        "red-light": "#f8d7da",
        "red-dark": "#842029",
        "green-light": "#d1e7dd",
        "green-dark": "#0f5132",
      },
    },
  },
  plugins: [],
};
