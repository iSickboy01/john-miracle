import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14181f",
        paper: "#f6f1e8",
        mist: "#ece6db",
        slate: "#4a5560",
        teal: "#0f6e6b",
        "teal-dark": "#0b524f",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [typography],
};

export default config;
