/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ajoutez ici les chemins vers vos fichiers HTML et JavaScript
    "./*.{html,js}",
  ],
  darkMode: 'class', // Permet de basculer entre les modes en utilisant la classe 'dark'
  theme: {
    extend: {

      fontFamily: {
        alef: ['Alef', 'sans-serif'],
      },
      fontSize: {
        '20': '20px', // Déclare la taille de police 20px
      },
    },
  },
  plugins: [],
}


