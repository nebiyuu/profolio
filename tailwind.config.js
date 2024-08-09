/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        customBlue: '#1e40af',
        customGreen: '#10b981',
        customYellow:'#DD8D8D',
        secondaryblue:'#0F1628'
      },
      height:{
        '500': '20rem'
      },
      width:{
        '500': '20rem'
      },
      opacity:{
        '5':'0.6'
      }
    },  },
  plugins: [],
}

