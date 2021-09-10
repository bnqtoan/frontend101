module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
