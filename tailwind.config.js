/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#EB993A',
        'secondary': '#5FB0EB',
        'earth': '#4C4135',
      },
      fontFamily: {
        'Roboto': ["'roboto'", 'sans-serif'],
      },
      borderRadius: {
        'theme': '4rem'
      }
    },
  },
  plugins: [],
}
