const theme = require("@ccs-dev/tailwind");
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
theme.theme.colors.green = {
  ...theme.theme.colors.green,
}
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...theme.theme,
    extend: {
      ...theme.theme.extend,
      colors: {
        primary: {
          ...theme.theme.colors.green,
        },
        header: "rgb(88 182 9)",
        emerald: colors.emerald,
        lime: colors.lime,
        teal: colors.teal,
        indigo: colors.indigo
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-code)", "monospace"]
      }
    },
  },
  plugins: [],
};
console.log(module.exports.theme.fontFamily)