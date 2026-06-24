import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#020101",       // near-black text
        teal: {
          DEFAULT: "#183030", // dark teal brand
          deep: "#0f2020",
        },
        mint: "#d7efe2",       // light accent background
      },
      fontFamily: {
        heading: ["var(--font-bricolage)", "serif"],
        body: ["var(--font-karla)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
