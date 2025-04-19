/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        sans: ["Poppins", ...fontFamily.sans],
      },
      screens: {
        xl: "1400px",
      },
    },
  },
  plugins: [daisyui],
};
