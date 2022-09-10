/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      '4.5xl': '2.5rem',
    },
    extend: {
      colors: {
        light: 'rgba(255, 255, 255, 0.6)',
        bg: '#1f1f38',
        bgVariant: '#2c2c6c',
        primary: '#4db5ff',
        primaryVariant: 'rgba(77, 181, 255, 0.4)',
        white: '#fff',
      },
      transitionDuration: {
        0: '0ms',
        400: '400ms',
      },
      backgroundImage: {
        'bg-texture': "url('./assets/1.png')",
        gradientBg: 'linear-gradient(#4db5ff, transparent)',
        'gradient-me':
          'linear-gradient(45deg, transparent, #4db5ff, transparent)',
      },
    },
  },
  plugins: [],
};
