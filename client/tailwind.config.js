import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#22c55e",
          "primary-content": "#1f2937",
          "secondary": "#38bdf8",
          "secondary-content": "#f5f5f4",
          "accent": "#fde047",
          "accent-content": "#001316",
          "neutral": "#1a251d",
          "neutral-content": "#f3f4f6",
          "base-100": "#1f2937",
          "base-200": "#4b5563",
          "base-300": "#374151",
          "base-content": "#e5e7eb",
          "info": "#38bdf8",
          "info-content": "#000b16",
          "success": "#71ed47",
          "success-content": "#000b16",
          "warning": "#facc15",
          "warning-content": "#000b16",
          "error": "#ef4444",
          "error-content": "#000b16",
        },
      },
    ],
  },
  plugins: [
    daisyui,
  ],
}

