module.exports = {
  content: ['**/*.html'],
  theme: {
    extend: {
      colors: {
        // brand
        fdlblue: {
          DEFAULT: '#0063e2',
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
        fdlred: {
          DEFAULT: '#F6331C',
          50: '#fff2f0',
          100: '#ffe1de',
          200: '#ffc9c3',
          300: '#ffa499',
          400: '#ff6f5e',
          500: '#ff422c',
          600: '#f6331c',
          700: '#cf1b06',
          800: '#ab1a09',
          900: '#8d1c0f',
        },
        fdlpink: {
          DEFAULT: '#EE93B5',
          50: '#fcf3f7',
          100: '#fae9f0',
          200: '#f8d2e2',
          300: '#f3aec9',
          400: '#ee93b5',
          500: '#e05484',
          600: '#ce3461',
          700: '#b2244a',
          800: '#93213e',
          900: '#7b2037',
        },
        fdllime: {
          DEFAULT: '#D7FB03',
          50: '#ffffe5',
          100: '#fcffc6',
          200: '#f7ff93',
          300: '#edff55',
          400: '#def922',
          500: '#d7fb03',
          600: '#95b300',
          700: '#708803',
          800: '#586a0a',
          900: '#4a5a0d',
        },
      },
      fontSize: {
        xxs: ['0.50rem', '0.75rem'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      variants: {
        animation: ['motion-safe', 'motion-reduce'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
