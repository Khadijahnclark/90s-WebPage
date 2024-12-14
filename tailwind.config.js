/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
  './src/**/*.{html,js}',],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1'},
          '100%': { opacity: '0'}
        }
      },
      animation: {
        fadeOut: ' fadeOut 1.5s ease-out'
      }
    },
  },
  plugins: [],
}

