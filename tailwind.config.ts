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
        modesto: ["var(--font-modesto)"],
        vn: ["var(--font-vn)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        root: "0.2em",
      },
      spacing: {
        "4.5": "1.125rem",
        "7.5": "1.845rem",
        "9.5": "2.375rem",
        "18": "4.5rem",
      },
      colors: {
        "root-white": "rgb(247,247,247)",
        "root-brown": "rgb(196,156,97)",
        "second-brown": "rgb(233,196,141)",
        "third-brown": "rgb(185,133,57)",
      },
      borderWidth: {
        "1.5": "1.5px",
        "3": "3px",
        "3.5": "3.5px",
        "4.5": "4.5px",
        "5.5": "5.5px",
        "6": "6px",
        "7": "7px",
        "7.5": "7.5px",
        "11": "11px",
        "12": "12px",
      },
      rotate: {
        "30": "30deg",
      },
      transitionDuration: {
        "400": "400ms",
      },
      transitionDelay: {
        "400": "400ms",
      },
      scale: {
        "65": "0.65",
        "70": "0.7",
        "77": "0.77",
        "80": "0.8",
        "140": "1.4",
        "165": "1.65",
        "215": "2.15",
      },
      transitionProperty: {
        menu: "transform, opacity",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
