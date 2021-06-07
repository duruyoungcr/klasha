const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '425px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        light: 'rgba(255, 131, 119, 0.1)',
        DEFAULT: '#ffffff',
        dark: '#E5E5E5',
      },
      red: {
        lightest: 'rgba(255, 131, 119, 0.1)',
        light: '#FF8377',
        DEFAULT: '#FF0000',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#F7F9FA',
        dark: '#A6ABB2',
        DEFAULT: '#F5F5F5',
        light: '#EBEBEB',
        lightest: 'rgba(255, 255, 255, 0.2)',
      },
      green: {
        light: '#2C665D',
        DEFAULT: '#3D8F83',
        dark: '#2A2A2A'
      },
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'xl': '18px',
      '2xl': '36px',
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
