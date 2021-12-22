module.exports = {
  content: [
    './*.html',
    './js/*.js',
  ],
  theme: {
    container: {
      padding: {
        'DEFAULT': '1.4rem',
        '2xl': '7rem',
      }
      // padding: '1.4rem',
    },
    extend: {
      spacing: {
        'quarter': '25%',
      },
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'cascadia': '"CascadiaCode"',
      },
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-medium': 'rgb(20, 86, 255)',
        'do-blue-light': 'rgb(0, 105, 255)',
        'do-blue-lighter': '#f9fafe',
      },
      boxShadow: {
        'input': '0 5px 1px 0 rgb(0, 0, 0, 0.1)',
        'input-focus': '0 2px 1px 0 rgb(0, 0, 0, 0.1)',
      },
      width: {
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
