import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Murshal Akhtar Ansari Components',
    brandUrl: 'https://iammursal.github.io',
  },
});
