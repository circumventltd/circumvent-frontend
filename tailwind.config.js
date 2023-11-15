/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000933",
        headertext: "#0030ff",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      euclid: ["euclid", "sans"],
      euclid500: ["euclid500", "sans"],
      euclid600: ["euclid600", "sans"],
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
