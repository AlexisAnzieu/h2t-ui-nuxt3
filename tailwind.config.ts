import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.ts",
    "./data/**/*.ts",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Rouge du logo H2T
        brand: {
          50: "#FFF1F3",
          100: "#FFE0E5",
          200: "#FFC2CC",
          400: "#F2557A",
          500: "#E3193D",
          600: "#C80F31",
          700: "#A10C28",
        },
        // Violet aubergine du logo, décliné pour la nav et le texte
        plum: {
          50: "#F5F2F8",
          100: "#ECE7F2",
          200: "#D6CCE2",
          300: "#B9AECB",
          400: "#8F80A6",
          500: "#6B5A86",
          600: "#4B3A66",
          700: "#3A2952",
          800: "#261A38",
          900: "#1A1128",
          950: "#110A1C",
        },
        paper: {
          DEFAULT: "#F7F4EF",
          50: "#FCFBF8",
          100: "#F7F4EF",
          200: "#EDE7DE",
          300: "#DDD4C7",
        },
        forest: { 100: "#E3EFE7", 500: "#2F6B4F", 700: "#1F4A36" },
        ocean: { 100: "#E2E9F5", 500: "#2D4E8A", 700: "#1E355F" },
        clay: { 100: "#F7E6DC", 500: "#B4532A", 700: "#7F3A1D" },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
        sans: ['"Instrument Sans"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        card: "0 1px 2px rgb(26 17 40 / 0.04), 0 4px 16px -4px rgb(26 17 40 / 0.08)",
        lift: "0 2px 4px rgb(26 17 40 / 0.06), 0 16px 32px -8px rgb(26 17 40 / 0.18)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-6px)" },
          "75%": { transform: "translateX(6px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.25)", opacity: "0" },
        },
      },
      animation: {
        shake: "shake 0.4s ease-in-out",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
} satisfies Config;
