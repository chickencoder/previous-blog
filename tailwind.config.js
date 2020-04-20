module.exports = {
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'active'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'active'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder', 'hover', 'active'],
    display: ['dark']
  },
  theme: {
    extend: {
      screens: {
        'xs': '384px'
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        'fish': {
          100: '#E6EFFC',
          200: '#C0D6F7',
          300: '#99BDF2',
          400: '#4D8CE9',
          500: '#015ADF',
          600: '#0151C9',
          700: '#013686',
          800: '#002964',
          900: '#001B43',
        },
        'sea': {
          100: '#EDFFFB',
          200: '#D3FFF4',
          300: '#B8FFEE',
          400: '#82FFE1',
          500: '#4DFFD4',
          600: '#45E6BF',
          700: '#2E997F',
          800: '#23735F',
          900: '#174D40',
        },
      }
    }
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
  ]
}