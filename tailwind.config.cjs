/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B4C7E",
        secondary: "#C86B3C",
      },
      borderRadius: {
        button: "8px",
      },
    },
  },
  plugins: [],
};
