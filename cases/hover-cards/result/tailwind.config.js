module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionTimingFunction: {
          'mine': 'cubic-bezier(.23,.88,.34,.99)'
      },
      minHeight: {
        '300px': '300px'
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"]
    },
  },
  plugins: [],
}
