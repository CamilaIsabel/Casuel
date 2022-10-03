/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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


        scale: {
          '55': '0.55',
        },
        scale: {
          '44': '0.44',
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
      }




      }

    },
  },
  plugins: [],
}
