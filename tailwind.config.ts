import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000911",
        "electric-blue": "#82F8FF",
        heliotrope: "#DA47FF",
        violet: "#690C81",
        // gray: "#515151",
      },
      fontFamily: {
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        "whyte-inktrap": ["var(--font-whyte-inktrap)", "sans-serif"],
        "pp-neue-bit": ["var(--font-pp-neue-bit)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(71.21% 71.21% at 50% 71.21%, rgba(50, 136, 148, 0.50) 13.5%, rgba(12, 55, 120, 0.50) 41.78%, rgba(48, 10, 71, 0.50) 62.35%, rgba(217, 217, 217, 0.00) 89.13%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "marquee-gradient":
          "linear-gradient(0deg, rgba(235, 110, 255, 0.54) 5%, rgba(235, 110, 255, 0.30) 100%)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      dropShadow: {
        input: "0 0 13px rgba(16, 114, 120, 0.62)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // @ts-ignore
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
    //...
  ],
};
export default config;
