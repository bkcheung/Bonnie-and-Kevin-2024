/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page': "url('public/landing.jpg')",
        'sky': "url('public/sky.png')"
      },
    },
  },
  plugins: [],
}

