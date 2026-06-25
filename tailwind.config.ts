import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f172a", // dark sections, headings, accent-button text
          deep: "#0b1120",    // footer / deepest panels
        },
        cyan: {
          DEFAULT: "#3aa6b9", // accent / primary buttons + icons
          dark: "#318fa0",
        },
        mint: "#e9f8f9",       // pale aqua light-section background
        ink: "#020101",
      },
      fontFamily: {
        heading: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-bricolage)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
