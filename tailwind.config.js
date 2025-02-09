const colors = require('./theme-colors.js');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.primary,
          accent: colors.accent
          }  // Your theme color
      },
      backgroundImage: {
        'music-radial': 'radial-gradient(circle at center, #0d0816 0%, #0d0a1599 100%)',
        'music-gradient': 'linear-gradient(90deg, rgba(13, 10, 21, 0.6), rgba(13, 8, 22, 0.6))'
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }