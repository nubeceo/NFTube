/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom': '95%', // Add your custom width value
      },
      backgroundColor:{
        'customBg' :' rgb(6, 6, 6)'
      },
      
    },
  },
  plugins: [],
}