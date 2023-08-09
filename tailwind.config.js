/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      space_mono: ['Space Mono', 'monospace'],
      monoton: ['Monoton', 'cursive'],
    },
    colors: {
      purple: '#660066',
      black: '#000000',
      white: '#ffffff',
      grey: '#7F7F7F',
      honey: '#EFCB48',
    },
    extend: {},
  },
  plugins: [],
};
