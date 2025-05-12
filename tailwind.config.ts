/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ['75px', '1.6']  // 修改为与postcss-pxtorem配置一致的75px
      }
    },
  },
  plugins: [],
}