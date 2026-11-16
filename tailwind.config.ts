import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/**
 * Direction : affiche de club imprimée en risographie.
 * Encres : rouge H2T, violet du logo, jaune fluo, noir d'encre, sur papier.
 */
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
        ink: "#170D24",
        paper: {
          DEFAULT: "#F2EEE4",
          50: "#FAF8F3",
          200: "#E6DFD0",
          300: "#D3CAB6",
        },
        brand: {
          DEFAULT: "#E3193D",
          300: "#F47A90",
          500: "#E3193D",
          600: "#C40F30",
          700: "#9E0B26",
        },
        violet: {
          200: "#D3C5E4",
          300: "#B49BD6",
          500: "#6E4C8E",
          700: "#4B2A63",
          900: "#2A1647",
        },
        sun: {
          DEFAULT: "#FFD23F",
          200: "#FFE88F",
        },
        riso: {
          blue: "#2F55B8",
          green: "#0F7A4A",
          orange: "#D4501C",
        },
      },
      fontFamily: {
        display: ["Archivo", ...defaultTheme.fontFamily.sans],
        sans: ["Archivo", ...defaultTheme.fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        hard: "4px 4px 0 0 #170D24",
        "hard-lg": "8px 8px 0 0 #170D24",
        "hard-brand": "4px 4px 0 0 #E3193D",
      },
      keyframes: {
        pop: {
          "0%": { transform: "translateY(24px) rotate(1.5deg)", opacity: "0" },
          "100%": { transform: "translateY(0) rotate(0)", opacity: "1" },
        },
      },
      animation: {
        pop: "pop 0.3s cubic-bezier(.2,.9,.3,1.15) both",
      },
    },
  },
} satisfies Config;
