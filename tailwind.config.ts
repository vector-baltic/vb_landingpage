import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyan: {
          bright: "hsl(var(--cyan-bright))",
          glow: "hsl(var(--cyan-glow))",
        },
        ocean: {
          dark: "hsl(var(--ocean-dark))",
          deeper: "hsl(var(--ocean-deeper))",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk Variable'", "sans-serif"],
        sans: ["'Inter Variable'", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        cyan: "0 0 30px hsl(188 95% 43% / 0.3)",
        "cyan-strong": "0 0 50px hsl(188 95% 43% / 0.4)",
        strong: "0 20px 50px hsl(0 0% 0% / 0.5)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        sonar: {
          "0%": { transform: "scale(0.1)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        sweep: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(100%)" },
        },
        wave: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out both",
        sonar: "sonar 4s ease-out infinite",
        sweep: "sweep 8s linear infinite",
        wave: "wave 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
