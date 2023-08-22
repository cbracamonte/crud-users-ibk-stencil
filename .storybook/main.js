module.exports = {
  stories: ['../src/stories/**/*.stories.(js|jsx|ts|tsx)'],

  addons: ['@storybook/addon-docs', '@storybook/addon-viewport', '@storybook/addon-backgrounds', '@storybook/addon-controls'],

  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },

  features: {
    legacyMdx1: false,
    storyStoreV7: true,
  },
};
