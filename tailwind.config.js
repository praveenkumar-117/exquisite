/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        myGray: '#c2c2c2',
        myGreen: '#59ba50',
      },
    },
  },
  plugins: [],
}

