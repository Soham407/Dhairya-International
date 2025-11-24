/******** Tailwind Config for Vite React (CJS) ********/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1e3a8a',
          lightBlue: '#3b82f6',
          dark: '#111827',
          gray: '#f3f4f6',
        },
      },
    },
  },
  plugins: [],
};