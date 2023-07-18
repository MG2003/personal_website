/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'bg': '#ffc3bf',
        'poptart': '#ffd9d6',
        'secondary': '#140b42',
        'darkbg': '#ff6a61',

      }
    },
  },
  plugins: [],
}

