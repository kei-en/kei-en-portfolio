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
        // pageBg: 'var(--pageBg-hex)',
      },
    },
  },
  plugins: [dynamicBackground],
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
