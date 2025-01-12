/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ['Tangerine', 'cursive'], 
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}