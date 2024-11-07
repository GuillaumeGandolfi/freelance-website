import type { Config } from "tailwindcss";

// Exportation de la configuration Tailwind
export default {
  // Définit les fichiers où Tailwind doit rechercher les classes CSS utilisées
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",  // Scan des classes dans les fichiers de pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",  // Scan des classes dans les composants
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Scan des classes dans le dossier app si utilisé
  ],

  // Personnalisation du thème Tailwind
  theme: {
    extend: {
      // Ajout de couleurs personnalisées basées sur des variables CSS
      colors: {
        background: "var(--background)", // Couleur d'arrière-plan personnalisée
        foreground: "var(--foreground)", // Couleur de premier plan personnalisée
      },
    },
  },

  plugins: [],
} satisfies Config;
