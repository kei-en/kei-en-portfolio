const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        space_mono: ['Space Mono', 'monospace'],
        monoton: ['Monoton', 'cursive'],
        la_belle_aurore: ['La Belle Aurore', 'cursive'],
      },
      colors: {
        purple: '#660066',
        black: '#000000',
        white: '#ffffff',
        grey: '#7F7F7F',
        honey: '#EFCB48',
        onNeutralBg: 'var(--onNeutralBg)',
        neutralBg: 'var(--neutralBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        primaryBg: 'var(--primaryBg)',
        primary: 'var(--primary)',
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },
  plugins: [dynamicBackground, addVariablesForColors],
};

function dynamicBackground({ addBase, addComponents, matchUtilities }) {
  addBase({
    ':root': {
      '--stripes-rgb': '0 0 0',
    },
  });

  addComponents({
    '.stripes': {
      position: 'relative',
      overflow: 'hidden',
    },
    '.stripes > *': {
      isolation: 'isolate',
    },
    '.stripes:before': {
      '--stripes-color': 'rgb(var(--stripes-rgb))',
      background: 'var(--stripes-color)',
    },
  });

  // Support for changing background color
  matchUtilities({
    'stripes-color': (value) => ({
      '--stripes-rgb': value,
    }),
  });
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
