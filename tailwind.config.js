const defaulTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", ...defaulTheme.fontFamily.sans],
        ibm: ["var(--font-ibm)", ...defaulTheme.fontFamily.mono],
      },
      colors: {
        blk: "#252527",
        wht: "#F3F3F3",
        gry: "#4D4D4D",
        gr1: "#27E5AA",
        gr2: "#22C085",
        gr3: "#1D8059",
        pnk1: "#E27FA6",
        pnk2: "#DF5483",
        pnk3: "#DC3166",
      },
      screens: {
        "m-s": "320px",
        "m-m": "375px",
        "m-l": "425px",
        t: "768px",
        "l-s": "1024px",
        "l-l": "1440px",
      },
      boxShadow: {
        "upper-md": "0px -5px 5px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
