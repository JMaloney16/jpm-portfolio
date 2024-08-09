/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:
        { 
          'amaranth_purple': { DEFAULT: '#982649', 100: '#1e080e', 200: '#3c0f1d', 300: '#5b172b', 400: '#791e39', 500: '#982649', 600: '#ca3360', 700: '#d86587', 800: '#e598af', 900: '#f2ccd7' }, 'electric_blue': { DEFAULT: '#53f4ff', 100: '#003f43', 200: '#007e87', 300: '#00bcca', 400: '#0eefff', 500: '#53f4ff', 600: '#74f6ff', 700: '#97f8ff', 800: '#bafaff', 900: '#dcfdff' }, 'steel_blue': { DEFAULT: '#3f88c5', 100: '#0c1b28', 200: '#183750', 300: '#245278', 400: '#306ea0', 500: '#3f88c5', 600: '#65a0d1', 700: '#8cb8dd', 800: '#b2d0e8', 900: '#d9e7f4' }, 'prussian_blue': { DEFAULT: '#032b43', 100: '#01090e', 200: '#01111b', 300: '#021a29', 400: '#032337', 500: '#032b43', 600: '#076098', 700: '#0b96ec', 800: '#57baf7', 900: '#abdcfb' }, 'sage': { DEFAULT: '#a6a57a', 100: '#222217', 200: '#45442e', 300: '#676645', 400: '#89885b', 500: '#a6a57a', 600: '#b7b793', 700: '#c9c9ae', 800: '#dbdbc9', 900: '#edede4' } 
        }
    }
  },
  plugins: []
};