/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",    
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // PRIMARY
        'green-100': '#F9FDFB',
        'green-200': '#60FFB7',
        'green-300': '#00E77F',
        'green-400': '#00BF69',
        'green-500': '#007F46',
        'green-600': '#004023',
        'green-700': '#004023',

        // GRAY
        'gray-100': '#FCFCFC',
        'gray-200': '#D4D4D4',
        'gray-300': '#BBBBBB',
        'gray-400': '#8E8E95',
        'gray-500': '#6A6A70',
        'gray-600': '#39393F',
        'gray-700': '#000000',
      },    
      fontFamily:{
        'font-family': 'Poppins, sans-serif',
      }           
    },
  },
  plugins: [],
}
