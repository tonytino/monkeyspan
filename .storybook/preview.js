import { themes } from '@storybook/theming';
import '../src/styles/variables.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.dark,
  },
  layout: 'centered',
};
