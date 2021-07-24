module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'header': ['Bigelow Rules'], 
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
