const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(320px,1fr))",
        fluid2: "repeat(auto-fit,minmax(250px,1fr))",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: "#778CA2",
        dark: "#3F434A",
      },
      dropShadow: {
        box: "-4px 8px 24px rgba(44, 63, 88, 0.02)",
        dropDown: "0px 20px 50px rgba(44, 63, 88, 0.15)",
      },
      screens: {
        md2: "877px",
      },
      boxShadow: {
        shadow1: "0px 1px 10px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
