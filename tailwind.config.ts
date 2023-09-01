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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        black: 'var(--color-bg)',
      },
      container: {
        center: true,
      },
      gridTemplateColumns: {
        200: 'repeat(auto-fill, 200px )',
      },
    },
  },
  plugins: [],
};
export default config;
