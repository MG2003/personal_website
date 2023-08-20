/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'primary': '#16151f',
        'highlight': '#16151f',
        //'highlight': '#ffccc9',
        'secondary': '#ffa399',
        'offwhite': '#f5f5f5'
        

      },
      boxShadow:{
        'dft': '10px 10px 0px 0px rgba(255, 124, 110, 1)',
        'sml': '7px 7px 0px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}

