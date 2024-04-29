/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'calc-vw-60px': 'calc(100vw - 240px)',
      },
      height: {
        'calc-vh-nav': 'calc(100vh - 56px)'
      },
      fontFamily: {
        'benguiat': ['ITC Benguiat', 'serif'],
      }
    },
  },
  plugins: [],
}