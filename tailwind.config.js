/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend:{
    colors: {
      primary: {
        orange: '#ff9900',
        orangeLight: '#ffc266',
        orangeDark: '#e99414',
      },

      secondary: {
        purple: '#48305b',
        purpleLight: '#5f4971',
        purpleDark: '#321f42',
      },

      tertiary: {
        blue: '#c7e8fc',
        blueLight: '#e7f3fa',
        blueDark: '#afd2e8',
      },

      light: {
        gray: '#f1f1e7',
        grayLight: '#f9fcff',
        grayDark: '#dadbdb',
      },
      dark: {
        black: '#1b1024',
        blackLight: '#221a29',
        blackDark: '#22152d',
      },
      red: '#FF1010',
    },
  },
},
  plugins: [],
};
