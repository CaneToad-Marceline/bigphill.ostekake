/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        viga: ['Viga', 'sans-serif'],
        zain: ['Zain', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
