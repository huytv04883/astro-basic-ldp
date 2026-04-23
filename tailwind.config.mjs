/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        'primary-dark': '#388E3C',
        'primary-light': '#81C784',
        'primary-tint': '#E8F5E9',
        dark: '#263238',
        'dark-secondary': '#37474F',
        gray: {
          DEFAULT: '#717171',
          light: '#F5F5F5',
          border: '#E0E0E0',
          pale: '#f0f0f0',
          muted: '#B0BEC5',
          placeholder: '#78909C',
          cool: '#CFD8DC',
          dot: '#D1D5DB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
