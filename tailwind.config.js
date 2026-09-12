/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#f2f9fb',
          100: '#e1f2f6',
          200: '#c5e6ee',
          300: '#99d2df',
          400: '#4faebe',
          500: '#2393a5',
          600: '#1b7787',
          700: '#1a616e',
          teal: '#1ea69a',
          tealHover: '#158b80',
          tealDark: '#0e7068',
          cyan: '#06b6d4',
          ice: '#eff8fa',
          card: '#ffffff',
        },
        midnight: {
          DEFAULT: '#000000',
          pure: '#000000',
          card: '#0a0a0a',
          cardHover: '#111111',
          border: '#1e1e1e',
          subtle: '#2a2a2a',
        },
      },
      fontFamily: {
        heading: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'clay': '0 20px 40px -15px rgba(26, 140, 150, 0.08), 0 0 1px 1px rgba(255, 255, 255, 0.9)',
        'clay-hover': '0 25px 50px -12px rgba(26, 140, 150, 0.16), 0 0 1px 1px rgba(255, 255, 255, 1)',
        'pill': '0 10px 25px -5px rgba(26, 150, 140, 0.35)',
      }
    },
  },
  plugins: [],
}
