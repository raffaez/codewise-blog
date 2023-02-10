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
          700: "#36384F",
        },
        purple: {
          100: "#b399ac",
          200: "#9d7c93",
          300: "#916D87",
          400: "#77546E",
          500: "#5E3D55",
          600: "#45263E",
          700: "#2E1128",
        },
        green: {
          300: "#98C1AF",
          400: "#719987",
          500: "#4C7262",
          600: "#284E3F",
        },
        pink: {
          500: "#D24F6B",
        },
      },
      border: ["hover", "focus"],
    },
  },
  plugins: [],
};
