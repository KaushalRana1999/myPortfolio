/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0e0d",
          panel: "#101614",
          panelLight: "#161f1c",
        },
        ink: {
          DEFAULT: "#d8e3df",
          dim: "#7c8c87",
          faint: "#4d5c58",
        },
        accent: {
          DEFAULT: "#39ff8f",
          dim: "#1f8f56",
          amber: "#ffb454",
          red: "#ff5c5c",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        scanlines:
          "repeating-linear-gradient(0deg, rgba(57,255,143,0.035) 0px, rgba(57,255,143,0.035) 1px, transparent 1px, transparent 3px)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.7" },
          "94%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        flicker: "flicker 6s infinite",
      },
    },
  },
  plugins: [],
};
