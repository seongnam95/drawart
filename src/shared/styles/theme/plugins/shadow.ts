import { withOptions } from 'tailwindcss/plugin';

export const shadow = withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      '.shadow-card': {
        boxShadow: '0px 6px 32px rgba(170, 170, 170, 0.02)',
        '@media (prefers-color-scheme: dark)': {
          boxShadow: '0px 6px 32px rgba(0, 0, 0, 0.02)',
        },
      },
    });
  };
});
