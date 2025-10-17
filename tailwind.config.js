/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0033a0',
        'secondary': '#4da6ff',
        'accent': '#a64dff',
      },
    },
  },
  plugins: [],
}

