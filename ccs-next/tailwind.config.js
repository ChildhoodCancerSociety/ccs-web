/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {},
    colors: {
      ccs: {
        "50": "#FAEEFF",
        "100": "#F4DBFF",
        "200": "#B991CC",
        "300": "#84519D",
        "400": "#663081",
        "500": "#4F186B",
        "600": "#40085C",
        "700": "#34034D",
        "800": "#2A043F",
        "900": "#230533"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-debug-screens")
  ],
};
