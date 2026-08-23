import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

addons.setConfig({
  theme: themes.light,
  sidebar: {
    collapsedRoots: [''], // Evita el colapso automático del menú
  },
});
