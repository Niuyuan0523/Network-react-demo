/** @type {import('tailwindcss').Config} */
const spacing = Array.from({ length: 1000 }, (_, index) => index + 1).reduce(
  (acc, curr) => {
    acc[`${curr}px`] = `${curr}px`
    return acc
  },{})
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing,
      fontSize: spacing,
      maxHeight: spacing,
      minHeight: spacing,
      maxWidth: spacing,
      minWidth: spacing,
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
    },
  },
  plugins: [],
}
