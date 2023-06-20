module.exports = {
  stories: [
    './stories/**/*.stories.@(ts|mdx)',
  ],
  // Load all addons for storybook compilation to succeed
  addons: [
    // Includes many addon, most used are: docs, control, action, toolbar
    // https://storybook.js.org/docs/angular/essentials/introduction
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
  ],
  features: {
    // Remove warning
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-implicit-postcss-loader
    postcss: false,

    // Remove error in documentation selector not match element
    // https://github.com/storybookjs/storybook/issues/18176#issuecomment-1124161889
    modernInlineRender: true,
  },
  framework: '@storybook/angular',
  core: {
    // Enable opt-in Webpack 5 for Angular 12 compatibility
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5
    builder: 'webpack5', 
  },
};
