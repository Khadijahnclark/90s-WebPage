/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
  './src/**/*.{html,js}',],
  theme: {
    extend: {
      animation: {
      fade: 'fadeOut 5s ease-in-out',
      },
    },
  },
  plugins: [],
}

