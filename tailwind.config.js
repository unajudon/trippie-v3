/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        youpurple: '#7041F2',
        youmint: '#10DBAC',
        youwhite: '#ffffff',
        yougray: '#E0E0E0',
        youlight: '#F7F8FA',
        youdark: '#2E2E2E',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
