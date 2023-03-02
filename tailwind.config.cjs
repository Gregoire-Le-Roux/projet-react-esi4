/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fill: ({ theme }) => ({
      gray: theme('colors.gray')
    }),
  },
  plugins: [],
}
