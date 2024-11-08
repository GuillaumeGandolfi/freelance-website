// tailwind.config.js
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette sobre et professionnelle
        gray: {
          100: '#f7fafc',
          900: '#1a202c',
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Police classique et lisible
      },
    },
  },
  plugins: [],
} satisfies Config;
