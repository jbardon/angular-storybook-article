module.exports = {
  stories: [
    './stories/**/*.stories.ts',
    './stories/**/*.mdx', // Starting SB7 no .stories for MDX
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/angular',
};
