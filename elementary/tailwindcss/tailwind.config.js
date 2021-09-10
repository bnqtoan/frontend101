module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand": "#ccc"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
