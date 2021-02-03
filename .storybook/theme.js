// https://storybook.js.org/docs/react/configure/theming
import { create } from '@storybook/theming';

// https://github.com/storybookjs/storybook/blob/master/lib/theming/src/types.ts
export default create({
  base: 'dark',

  // Storybook-specific color palette
  colorPrimary: '#FF4785', // coral
  colorSecondary: '#1EA7FD', // ocean

  // UI
  appBg: '#2f2f2f',
  appContentBg: '#333',
  appBorderColor: 'rgba(255,255,255,.1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#333333',
  textMutedColor: '#999999',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#1EA7FD',
  barBg: '#333333',

  // Form colors
  inputBg: '#3f3f3f',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 6,

  brandTitle: 'brbcoding.com',
  brandUrl: 'https://brbcoding.com',
  // brandImage: 'https://placehold.it/350x150',
});
