module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '30px': '30px'
      },
      borderRadius: {
          "5px": "5px",
          '20px': '20px'
      },
      container: {
        center: true
      },
      fontSize:{
        "h2": ['36px', {lineHeight: '56px'}],
        "h4": ['24px', {lineHeight: '56px'}],
      },
      fontFamily: {
        body: "'Mulish', sans-serif"
      },
      colors: {
        "gray-1000": "#7D7987"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
