/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
   theme: {
    extend: {
      screens: {
        xs: '440px',
        sm:'600px',
        md: '960px',
        mmd: '1175px',
        lg: '1280px',
        x: '1350px',
        xl: '1510px',
        xxl: '1660px',
        xxxl: '1880px'
      },
      colors: {
        'custom-blue': {
          DEFAULT: '#080819',
        },
        'custom-violet': {
          DEFAULT: '#1A003D',
        },
        'custom-indigo': {
          DEFAULT: '#0E0226',
        },
        'custom-purple': {
          DEFAULT: '#280E60',
        },


        scale: {
          '55': '0.75',
        },
        scale: {
          '44': '0.44',
        },
        scale: {
          '60': '0.90',
        },


        width: {
          '98': '28rem',
        },
        width: {
          '100': '32rem',
        },
        width: {
          '130': '36rem',
        },
        width: {
          '200': '46rem',
        },
        width: {
          '300': '52rem',
        },
        width: {
          '400': '58rem',
        },

        height: {
          '98': '28rem',
        },
        height: {
          '100': '32rem',
        },
        height: {
          '130': '36rem',
        },
        height: {
          '200': '52rem',
        },

      gap:{
        '36': '36rem',
      },

      margin: {
        '37rem': '37rem',
      },
      inset: {
        '28rem': '28rem',
      }


      }

    },
  },
  plugins: [],
}
