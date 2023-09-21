/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14A673",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
