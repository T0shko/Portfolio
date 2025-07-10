/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
        'accent': '#4f46e5',
        'accent-hover': '#4338ca',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 