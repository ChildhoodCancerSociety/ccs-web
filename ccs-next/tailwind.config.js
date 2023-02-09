const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'ccs-primary': '#452264',
        'ccs-secondary': '#52B788'
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
  plugins: [],
}
