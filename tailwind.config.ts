import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        pink: "var(--color-pink)",
        navy_blue: "var(--color-navy-blue)",
        off_navy_blue: "var(--color-off-navy-blue",
        red_price: "var(--color-red-price)",
        purple: "var(--color-purple)",
        off_purple: "var(--color-off-purple)",
        accent_purple: "var(--color-accent-purple)",
        sub_text: "var(--color-sub-text)",
        input_border: "var(--color-input-border)",
      },
      fontFamily: {
        josefin: ["var(--font-josefin)"],
        lato: ["var(--font-lato_regular)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
