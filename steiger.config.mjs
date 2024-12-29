import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ['./src/shared/**'],
    rules: {
      'fsd/public-api': 'off',
    },
  },
  {
    files: ['./src/widgets/**'],
    rules: {
      'fsd/insignificant-slice': 'off',
    },
  },
]);
