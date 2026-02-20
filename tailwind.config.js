/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1D3A5F',
        gold: '#C29D6F',
      },
    },
  },
  plugins: [],
}
