/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'amazon-black': '#0F1111',
        'amazon-grey': '#cccccc',
        'amazon-orange': '#ff9900',
        'amazon-dark-grey': '#232f3e',
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

