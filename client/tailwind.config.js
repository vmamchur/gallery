const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Patrick Hand"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#FFFFFF",
        black: "#1B1B1B",
        primary: {
          100: "#EEEEEE",
          200: "#D8D8D8",
          300: "#B4B4B4",
          400: "#929292",
          500: "#696969",
          600: "#454545",
        },
        error: "#E12B56",
      },
    },
  },
  plugins: [],
};
