/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Lordish-Regular'],
        subtitle: ['Magnificent'],
        text: ['Ranade-Light']
      },
      fontSize: {
        sub: '3em'
      }
    }
  },
  plugins: []
}
