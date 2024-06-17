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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: "#111111",
      },
      fontFamily: {
        abel: ["abel", "sans-serif"],
        arvo: ["arvo", "serif"],
        bitter: ["bitter", "serif"],
        glegoo: ["glegoo", "serif"],
        lora: ["lora", "serif"],
        oswald: ["oswald", "sans-serif"],
        "playfair-display": ["playfair-display", "serif"],
        "proza-libre": ["proza-libre", "sans-serif"],
        "pt-serif": ["pt-serif", "serif"],
        quicksand: ["quicksand", "sans-serif"],
        "roboto-condensed": ["roboto-condensed", "sans-serif"],
        "roboto-flex": ["roboto-flex", "sans-serif"],
        "roboto-slab": ["roboto-slab", "serif"],
        rokkitt: ["rokkitt", "serif"],
        "slabo-27px": ["slabo-27px", "serif"],
        "work-sans": ["work-sans", "sans-serif"],
        karla: ["karla", "sans-serif"],
      },
      maxWidth: {
        "1/2": "50%",
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
