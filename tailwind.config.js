const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sand':['Quicksand', 'sans-serif'],
        'karla':['karla','sans-serif'],
        // 'kf':['','sans-serif'],
        'source':['Source Serif Pro','serif']
      }
    },
  },
  plugins: [],
}