import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "base-100": "#292a35",
        "neutral": "#000e0f",
        primary: "#005cff",
        secondary: "#005aff",
        accent: "#0045ff",
        info: "#009bff",
        success: "#14ff53",
        warning: "#f5ae00",
        error: "#f9003f",
        darkCyan: "#008b8b"
      },
    },
  },
  plugins: [],
};
export default config;
