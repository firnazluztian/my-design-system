import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Kiichan Design System',
  brandUrl: './',
  brandImage: './kiichan.webp',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
}); 