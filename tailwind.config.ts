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
        beige: "#f6f1e7",      // warm off-white light-section background
        cloud: "#f4f4f4",      // neutral pale-grey light-section background
        ink: "#020101",
        yellow: {
          DEFAULT: "#f2b134", // sparing warm accent, used only in soft background glows
          dark: "#d99a1f",
        },
        ndis: {
          DEFAULT: "#5c2d91", // official "We (heart) NDIS" purple, used only for the NDIS button
          dark: "#481f74",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-cormorant)", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        dataStream: {
          "0%": { strokeDashoffset: "20" },
          "100%": { strokeDashoffset: "0" },
        },
        schemaPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.02)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        dataStream: "dataStream 1s linear infinite",
        schemaPulse: "schemaPulse 2.5s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
