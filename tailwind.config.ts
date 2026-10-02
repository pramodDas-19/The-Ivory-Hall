import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        foreground: "#1C1C1A",
        ivory: {
          50: "#FAF9F6",
          100: "#F5F3ED",
          200: "#E8E4DC",
          300: "#DDD9D0",
          400: "#A8A49C",
          500: "#63625D",
          800: "#2B2A27",
          900: "#1C1C1A",
        },
        charcoal: {
          DEFAULT: "#1C1C1A",
          muted: "#4A4944",
          soft: "#2E2D2A",
        },
        taupe: {
          DEFAULT: "#E8E4DC",
          light: "#F2EFE9",
          dark: "#D5CFBF",
        },
        gold: {
          DEFAULT: "#B89B62",
          light: "#CEB57F",
          dark: "#967A42",
          subtle: "rgba(184, 155, 98, 0.12)",
        },
        border: {
          light: "#DDD9D0",
          subtle: "rgba(221, 217, 208, 0.6)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.3em",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(28, 28, 26, 0.05)",
        card: "0 10px 30px -4px rgba(28, 28, 26, 0.07)",
        elevated: "0 20px 40px -6px rgba(28, 28, 26, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
