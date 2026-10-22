/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './main.js', './src/**/*.{js,html}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        // Blue palette matched to the NNDL course logo
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e3a8a',
          800: '#172e6e',
          900: '#0f1f4d',
        },
        accent: { 500: '#6d5ce7', 600: '#5b4bd1' },
      },
    },
  },
  plugins: [],
}
