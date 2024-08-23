import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#9ACD32",
        orange: "#F98113",
        greenBlue: "#33A9AC",
        blackColor: "#252330",
        grayColor: "#3B3A4A",
      },

      fontFamily: {
        caveat: "Caveat",
        roboto: "Roboto Condensed",
      },

      animation: {
        "loop-scroll": "loop-scroll 12s linear infinite",
      },

      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
