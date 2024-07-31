/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page': "url('/landing.jpg')",
        'sky': "url('/sky.png')"
      },
    },
  },
  plugins: [],
}

