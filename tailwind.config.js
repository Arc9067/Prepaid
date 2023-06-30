/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {},
      fontFamily: {
        wendyOne: ["Wendy One", "sans-serif"],
        irishGrover: ["Irish Grover", "sans-serif"],
      },
      padding: {
        high: "150px",
        low: "50px",
        footer: "20px",
      },
    },
  },
  plugins: [],
};
