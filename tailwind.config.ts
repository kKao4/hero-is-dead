import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "4.5": "1.125rem",
      },
      colors: {
        "root-white": "rgb(247,247,247)",
        "root-brown": "rgb(196, 156, 97)",
        "second-brown": "rgb(233,196,141)",
        "third-brown": "rgb(185,133,57)",
      },
      borderWidth: {
        "3": "3px",
        "3.5": "3.5px",
        "6": "6px",
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
      scale: {
        "165": "1.65",
        "215": "2.15",
      },
    },
  },
  plugins: [],
};
export default config;
