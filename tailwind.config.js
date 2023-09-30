/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        'lightgray': '#d6e2f0',
        'grayishblue': '#7b879d',
        'darkblue': '	#1f3251'
      }
    },
  },
  plugins: [],
}