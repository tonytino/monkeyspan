// https://storybook.js.org/docs/react/configure/features-and-behavior
import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false,
});
