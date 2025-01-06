/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Noto Sans',
          'Noto Sans JP',
          'Noto Sans KR',
          'Noto Sans SC',
          'Noto Sans TC',
          'Noto Sans Arabic',
          'Noto Sans Bengali',
          'sans-serif',
        ],
      },
    },
  },
  plugins: []
};