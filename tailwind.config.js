/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'google-sans-flex': ['"Google Sans Flex"', 'system-ui', 'sans-serif'],
        'sans': ['"Google Sans Flex"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 15s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 64px))' },
        }
      }
    },
  },
  plugins: [],
}