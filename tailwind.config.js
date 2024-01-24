/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffebcc',
          200: '#ffd699',
          300: '#ffc266',
          400: '#ffad33',
          500: '#ff9900',
          600: '#cc7a00',
          700: '#995c00',
          800: '#663d00',
          900: '#331f00',
        },

        secondary: {
          100: '#ebccff',
          200: '#d699ff',
          300: '#c266ff',
          400: '#ad33ff',
          500: '#9900ff',
          600: '#7a00cc',
          700: '#5c0099',
          800: '#3d0066',
          900: '#1f0033',
        },

        tertiary: {
          100: '#ccffeb',
          200: '#99ffd6',
          300: '#66ffc2',
          400: '#33ffad',
          500: '#00ff99',
          600: '#00cc7a',
          700: '#00995c',
          800: '#00663d',
          900: '#00331f',
        },

        light: {
          100: '#fffff2',
          200: '#ffffe5',
          300: '#ffffd9',
          400: '#ffffcc',
          500: '#ffffbf',
          600: '#cccc99',
          700: '#999973',
          800: '#66664c',
          900: '#333326',
        },
        dark: {
          100: '#cfcfcf',
          200: '#9f9f9f',
          300: '#706f6f',
          400: '#403f3f',
          500: '#100f0f',
          600: '#0d0c0c',
          700: '#0a0909',
          800: '#060606',
          900: '#030303',
        },
      },
    },
  },
  plugins: [],
};
