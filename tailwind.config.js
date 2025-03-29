/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Montserrat", "Padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f8f6ee",
          100: "#efead2",
          200: "#e1d4a7",
          300: "#cfb875",
          400: "#c4a358",
          500: "#b18a41",
          600: "#986e36",
          700: "#7a532e",
          800: "#67452c",
          900: "#593b2a",
          950: "#331f15",
        },
        death : "#8B0000",
        injury: "#FFA600",
        lost: "#1E3A8A",
        home: '#171717'
      },
    },
  },
  plugins: [flowbite()],
};
