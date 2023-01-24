/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,svelte}"],
  theme: {
    colors: {
      darkPurple: {
        900: "#0B0911",
        800: "#130F1E",
        700: "#1C162C",
        600: "#3C3748",
        500: "#6A617F",
      },
      purple: {
        500: "#8257E5",
        400: "#9674E5",
      },
    },
    extend: {},
  },
  plugins: [],
};
