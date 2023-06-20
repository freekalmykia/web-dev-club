/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins, Tourney, sans-serif, cursive',
      },
      colors: {
        'body': '#17171F',
        'info': '#0d86f8',
        'selected-text': '#A3A3FF',
        'theme': '3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
    },

  },
  plugins: [],
}

