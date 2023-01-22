const colors = require('tailwindcss/colors');

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./{pages,components,structure}/**/*.{js,ts,jsx,tsx,css}",
    "./styles/**/*.css"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      // FIXME: lets make a better name for this
      primary: {
        "50": "#FEEEFF",
        "100": "#FBD9FF",
        "200": "#C590CC",
        "300": "#93529D",
        "400": "#782F85",
        "500": "#5F166D",
        "600": "#470555",
        "700": "#31003D",
        "800": "#1A0120",
        "900": "#0C010F"
      },
      // FIXME: and this!
      secondary: {
        "50": "#EEFFEB",
        "100": "#B9EFAD",
        "200": "#94E17F",
        "300": "#6EC951",
        "400": "#52B72E",
        "500": "#3B9614",
        "600": "#296A0A",
        "700": "#1A3C07",
        "800": "#0F2005",
        "900": "#091104"
      },
      ...colors
    },
    fontFamily: {
      "header": "Signika",
      "body": "Lexend Deca",
      "sans": "Lexend Deca"
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-debug-screens")
  ],
};
