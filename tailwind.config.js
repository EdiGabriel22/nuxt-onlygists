const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "app.vue",
    "modules/**/*.vue",
    "components/**/*.vue",
    "assets/presets/lara/**/*.{js,vue,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary-500))",
          50: "rgb(var(--primary-50))",
          100: "rgb(var(--primary-100))",
          200: "rgb(var(--primary-200))",
          300: "rgb(var(--primary-300))",
          400: "rgb(var(--primary-400))",
          500: "rgb(var(--primary-500))",
          600: "rgb(var(--primary-600))",
          700: "rgb(var(--primary-700))",
          800: "rgb(var(--primary-800))",
          900: "rgb(var(--primary-900))",
          950: "rgb(var(--primary-950))",

        },
        surface: {
          DEFAULT: "rgb(var(--surface-500))",
          "0": "rgb(var(--surface-0))",
          "50": "rgb(var(--surface-50))",
          "100": "rgb(var(--surface-100))",
          "200": "rgb(var(--surface-200))",
          "300": "rgb(var(--surface-300))",
          "400": "rgb(var(--surface-400))",
          "500": "rgb(var(--surface-500))",
          "600": "rgb(var(--surface-600))",
          "700": "rgb(var(--surface-700))",
          "800": "rgb(var(--surface-800))",
          "900": "rgb(var(--surface-900))",
          "950": "rgb(var(--surface-950))",
        }
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    // require('tailwindcss-animate')
  ],
};