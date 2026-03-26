import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        slatepanel: '#101820',
        borderline: '#243447',
        ink: '#d3deea',
        accent: '#4f8cff'
      }
    }
  },
  plugins: []
};

export default config;
