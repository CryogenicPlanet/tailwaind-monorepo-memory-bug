/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['pages/**/*.tsx', '../../packages/**/*.tsx'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
