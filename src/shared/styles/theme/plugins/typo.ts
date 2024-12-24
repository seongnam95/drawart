import * as plugin from 'tailwindcss/plugin';

export const typography = plugin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      // Title
      '.typo-title-18': {
        fontSize: '18px',
        lineHeight: '1.4',
        letterSpacing: '-0.025em',
        fontWeight: '700',
      },
      '.typo-title-24': {
        fontSize: '24px',
        lineHeight: '1.4',
        letterSpacing: '-0.025em',
        fontWeight: '700',
      },
      '.typo-title-32': {
        fontSize: '32px',
        lineHeight: '1.4',
        letterSpacing: '-0.025em',
        fontWeight: '700',
      },

      // Body
      '.typo-body-14': {
        fontSize: '14px',
        lineHeight: '1.4',
        letterSpacing: '-0.025em',
        fontWeight: '400',
      },
      '.typo-body-16': {
        fontSize: '16px',
        lineHeight: '1.4',
        letterSpacing: '-0.025em',
        fontWeight: '400',
      },

      // Label
      '.typo-label-10': {
        fontSize: '10px',
        lineHeight: '1.4',
        letterSpacing: '-0.025em',
        fontWeight: '400',
      },
      '.typo-label-12': {
        fontSize: '12px',
        lineHeight: '1.4',
        letterSpacing: '-0.025em',
        fontWeight: '400',
      },
    });
  };
});
