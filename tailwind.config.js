/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
      colors: {
        brown: {
            500: '#8B4513',
        },
      },
    },
  },
plugins:[
  require('daisyui'),
],

}

