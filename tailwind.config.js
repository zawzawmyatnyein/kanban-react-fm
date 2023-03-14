const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: '#EA5555',
        'dark-blue': '#635FC7',
        'dark-blue-opacity': 'rgba(99, 95, 199,0.25)',
        'very-light-blue': '#f0effa',
        'light-blue': '#A8A4FF',
        'light-gray': '#F4F7FD',
        'light-gray-line': '#E4EBFA',
        'medium-gray': '#828fa3',
        'medium-gray-opacity': 'rgba(130,143,163,0.4)',
        'dark-gray': '#2B2C37',
        'dark-gray-line': '#3E3F4E',
        'very-dark-gray': '#20212C',
        'card-shadow': 'rgba(54, 78, 126,0.101545)',
        overlay: 'rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'medium-gray-gradient':
          'linear-gradient(to bottom, rgba(121, 132, 147, 0.2),rgba(130,143,163,0.1), rgba(130,143,163,0))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
