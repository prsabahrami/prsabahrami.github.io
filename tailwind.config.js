module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          fill: 'var(--background)',
        },
      },
      textColor: {
        skin: {
          base: 'var(--foreground)',
        },
      },
    },
  },
  plugins: [],
}
