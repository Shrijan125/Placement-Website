import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: '#2d4073',
        hovercolor: '#17213C',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
};
export default config;
