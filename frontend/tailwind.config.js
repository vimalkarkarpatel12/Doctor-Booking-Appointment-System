/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // Include jsx files
  theme: {
    extend: {
      colors: {
        'primary':"#5f6FFF"
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}