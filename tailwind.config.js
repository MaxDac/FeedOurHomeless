/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{razor,html,cshtml}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      "colors": {
        "brand": "#f8b864",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

