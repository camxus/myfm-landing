import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        bg: "#f0ede6",
        "bg-2": "#e8e4db",
        surface: "#ffffff",
        ink: "#0f0e0d",
        border: "#c8c3b8",
        muted: "#7a7570",
        accent: "#c9a8b2",
        "accent-dark": "#a0707e",
        error: "#a05050",
      },
    },
  },
  plugins: [],
};
export default config;
