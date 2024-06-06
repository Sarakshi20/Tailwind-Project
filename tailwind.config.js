/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'], // files where u want to use tailwind
  theme: { // used to define custom css that can be used directly
    extend: {
      colors:{
        'primary': '#8E3E63',
        'secondary': '#D2649A',
        'tertiary': '#F6FAB9',
        'quaternary': '#CAE6B2',
      },
      fontFamily:{
        'funky': ['Coming Soon', 'sans-serif'],
        'cool': ['Bebas Neue', 'serif'],
      },
    },
  },
  plugins: [],
}

