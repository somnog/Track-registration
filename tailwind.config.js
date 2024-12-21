/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#4CAF50", // Green
        secondary: "#FFC107", // Amber
        accent: "#FF5722", // Deep Orange
        background: "#F5F5F5", // Light Gray
        text: "#212121", // Dark Gray
      }
    },
    fontFamily:{
      "body":["Poppins","sans-serif"],
    }
  },
  plugins: [],
}