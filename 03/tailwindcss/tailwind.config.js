module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "heading": "Arial, sans"
    },
    extend: {
      container: {
        center: true
      },
      colors:{
        brand: "#ffce00"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}