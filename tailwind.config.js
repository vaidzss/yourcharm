/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#F8F4E3',
        'secondary': '#2E3047',
        'high': '#D4AF37',
        'body':'#B8C4B8',
      }
    },
  },
  plugins: [],
}

