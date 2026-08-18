/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tulsi: {
          burgundy: '#1a050b',
          'burgundy-deep': '#0f0206',
          'burgundy-light': '#2d0a15',
          gold: '#e5c158',
          'gold-antique': '#c59b27',
          'gold-light': '#f3db83',
          parchment: '#f7f3e8',
          cream: '#e8dfd1',
          saffron: '#cc4425',
          amber: '#df8a28',
          indigo: '#121226',
          green: '#2d4a3e',
        },
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        'cinzel-dec': ['var(--font-cinzel-decorative)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f3db83 0%, #c59b27 50%, #e5c158 100%)',
        'burgundy-radial': 'radial-gradient(circle at center, rgba(45, 10, 21, 0.6) 0%, rgba(10, 2, 4, 0.95) 100%)',
      },
    },
  },
  plugins: [],
};
