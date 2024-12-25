import { fontFamily } from 'tailwindcss/defaultTheme';

import { typography, shadow, zIndex } from './src/shared/styles/theme/plugins';

import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      currentColor: 'currentColor',
      transparent: 'transparent',
      background: 'var(--background)',
      surface: 'var(--surface)',
      input: 'var(--input)',
      foreground: {
        DEFAULT: 'var(--foreground)',
        accent: 'var(--foreground-accent)',
        muted: 'var(--foreground-muted)',
      },
      primary: {
        DEFAULT: 'var(--primary)',
        accent: 'var(--primary-accent)',
        surface: 'var(--primary-surface)',
        foreground: 'var(--primary-foreground)',
      },
      border: {
        DEFAULT: 'var(--border)',
        accent: 'var(--border-accent)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
    },
    fontFamily: {
      pretendard: ['var(--pretendard)', ...fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        'grid-pattern': 'url("/grid-pattern.svg")',
        'grid-pattern-dark': 'url("/grid-pattern-dark.svg")',
      },
    },
  },
  plugins: [typography, shadow, zIndex],
} satisfies Config;
