/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        white: '#ffffff',
        'light-gray': '#D1D5DB',
        gray: '#6b7280',
        'deep-gray': '#0A0A0F',
        'light-gray': '#313131',
        dark: '#101017',
        'deep-dark': '#050507',
        'light-dark': '#1f2937',
      },
    },
  },
  plugins: [],
};
