module.exports = {
  stories: [
    './stories/**/*.stories.ts',
    './stories/**/*.stories.mdx',
    './stories/**/*.stories.md',
  ],
  /*
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
  ],
  */
  framework: '@storybook/angular',
};
