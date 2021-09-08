module.exports = {
  purge: [
    'index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'calc': '100px 100px 100px 100px'
      },
      translate: ['active'],
      borderWidth: {
        '2': '1.5px',
      },
      maxWidth: {
        'xs': '15rem'
      },
      animation: {
        spin: 'spin 1.5s 1'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      translate: ['active'],
      opacity: ['active'],
      borderWidth: ['active'],
      backgroundImage: ['hover'],
      animation: ['active'],
      group: ['active'],
    },
  },
  plugins: [
  ],
}