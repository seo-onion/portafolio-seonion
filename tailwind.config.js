/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px'
    },
    extend: {

      colors: {
        backgroundColor: '#ffc567',
        screenColor: '#d9d9d9',
        purple: '#552cb8',
        pink: '#fb7da8',
        red: '#fd5a46',
        green: '#00995e',
        blue_light: '#058cd7'
      },
    },
  },
  plugins: [],
}