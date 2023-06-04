/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cherry-bomb-one': 'Cherry Bomb One'
      },
      colors: {
        'body': '#18161f',
        'info': '#0d86f8'
      }
    },
  },
  plugins: [],
}

