/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        blue:{
          100 : "#b1b2f5",
          200 : "#9fa0fe"
        }
      }
    },
  },
  plugins: [],
}