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
      // FIXME: lets make a better name for this
      primary: {
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
