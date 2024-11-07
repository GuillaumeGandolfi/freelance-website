// Indique le type de configuration pour PostCSS
// Ce commentaire utilise la syntaxe JSDoc pour aider les éditeurs de code à
// reconnaître et autocompléter les types de `postcss-load-config`
/** @type {import('postcss-load-config').Config} */

// Déclare la configuration PostCSS
const config = {
  // Plugins de PostCSS utilisés pour transformer le CSS
  plugins: {
    // Charge et configure Tailwind CSS, qui génère les classes CSS selon sa configuration
    tailwindcss: {},
  },
};

// Exporte la configuration pour que Next.js et PostCSS puissent l'utiliser
export default config;
