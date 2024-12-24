import * as plugin from 'tailwindcss/plugin';

export const zIndex = plugin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      '.z-hide': { zIndex: '-1' },
      '.z-base': { zIndex: '0' },
      '.z-docked': { zIndex: '10' },
      '.z-dropdown': { zIndex: '1000' },
      '.z-sticky': { zIndex: '1100' },
      '.z-overlay': { zIndex: '1200' },
      '.z-modal': { zIndex: '1300' },
      '.z-popover': { zIndex: '1400' },
      '.z-context-menu': { zIndex: '1500' },
      '.z-toast': { zIndex: '1600' },
      '.z-tooltip': { zIndex: '1700' },
      '.z-highest': { zIndex: '9999' },
    });
  };
});
