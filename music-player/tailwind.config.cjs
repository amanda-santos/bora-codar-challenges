/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "purple-dark": "#0F0D13",
      "purple-light": "#2A2141",
      "gray-light": "#E1E1E6",
      "gray-dark": "#C4C4CC",
    },
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    extend: {},
  },
};
