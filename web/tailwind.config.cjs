/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: {
          300: "#7478A0",
          500: "#4C506C",
          600: "#4c4e61",
          700: "#36384F",
          800: "#292B42",
          900: "#1A1B29",
          950: "#101119",
        },
      },
      border: ["hover", "focus"],
    },
  },
  darkMode: "class",
  plugins: [],
};
