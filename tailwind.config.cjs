const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(350px,1fr))",
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
    },
  },
  plugins: [],
};
