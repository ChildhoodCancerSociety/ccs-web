const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'ccs-primary': '#452264',
        'ccs-secondary': '#52B788',
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
        }
      },
      fontFamily: {
        sans: ['var(--font-gotham-rounded)', 'var(--font-futura-rounded)', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        // Simple 3 column grid for the footer
        '3f': 'repeat(3, minmax(12.5rem, 1fr))',
      }
    },
      screens: {
        'xs': '360px',
        // => @media (min-width: 360px) { ... }

        'sm': '481px',
        // => @media (min-width: 481px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1440px',
        // => @media (min-width: 1440px) { ... }

        '2xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      }
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-debug-screens")
  ],
};
