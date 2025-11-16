import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        // Keep it simple: black / white / subtle greys
        background: "#000000",
        foreground: "#ffffff",
        muted: "#111111",
        border: "#1f1f1f"
      }
    }
  },
  plugins: []
};

export default config;
