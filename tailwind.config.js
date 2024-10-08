/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width', // Adds transition-width utility
      },
    },
  },
  plugins: [],
}
