/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bacasime: ["Bacasime Antique", "serif"],
        alegreya: ["Alegreya Sans", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"], 
        alef: ["Alef", "sans-serif"], 

      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

