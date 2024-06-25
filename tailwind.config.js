/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #11ffbd, #aaffa9)",
        "secondary-gradient": "linear-gradient(to right, #aaffa9, #11ffbd)",
      },
      colors: {
        primary: "#11ffbd",
        secondary: "#aaffa9",
        dark: "#111111",
      },
      fontFamily: {
        karla: ["karla", "sans-serif"],
      },
      maxWidth: {
        "1/2": "50%",
      },
      boxShadow: {
        full: "0 0 10px 0",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
