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
    // Angular < 12 comes with Webpack 5
    // Storybook uses v4 by default so opt-in for optional v5
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5
    builder: 'webpack5', 
  },
};
