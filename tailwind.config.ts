import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        muted: "#111111",
        border: "#1f1f1f",
        accent: "#C6A667" // subtle gold accent
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        "fade-up": "fade-up 400ms ease-out forwards",
        "fade-in": "fade-in 400ms ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
