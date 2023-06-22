/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/main.js",
    "./dist/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cherry-bomb-one': 'Cherry Bomb One'
      },
      colors: {
        'body': '#c1d7f5',
        'info': '#0d86f8',
      }
    },
  },
  plugins: [],
}

