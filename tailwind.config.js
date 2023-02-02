/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // brand
        'fdl-blue': {
          50: '#edf9ff',
          100: '#d6f0ff',
          200: '#b5e7ff',
          300: '#83daff',
          400: '#48c3ff',
          500: '#1ea3ff',
          600: '#0684ff',
          700: '#0063e2',
          800: '#0855c5',
          900: '#0d4b9b',
        },
        red: { DEFAULT: '#F6331C' },
        pink: { DEFAULT: '#EE93B5' },
        lime: { DEFAULT: '#D7FB03' },
        black: { DEFAULT: '#000' },
        white: { DEFAULT: '#FFF' },

        // R/GA COLORS DIFFER FROM FDL PLAYBOOK
        // blue: {
        //   DEFAULT: '#2565DA',
        //   400: '#3885E8',
        //   300: '#80B1F1',
        //   200: '#B3D0F6',
        //   100: '#D9E8FB',
        // },
        // red: { DEFAULT: '#E24630' },
        // pink: { DEFAULT: '#E197B3' },
        // lime: { DEFAULT: '#DFF851' },
        // black: { DEFAULT: '#000' },
        // white: { DEFAULT: '#FFF' },

        // grayscale
        'gray-dark': { DEFAULT: '#707070' },
        gray: { DEFAULT: '#A4A4A4' },
        'gray-light': { DEFAULT: '#F1F1F1' },
      },
    },
  },
  plugins: [],
}
