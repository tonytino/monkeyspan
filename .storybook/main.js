const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/theming',
  ],
  webpackFinal: async (config) => {
    // Mirror the aliases we configure in rollup.config.js
    config.resolve.alias = {
      src: path.resolve(__dirname, '../src'),
    };

    // Mirror the css functionality we support in rollup.config.js
    // 1. Filter out any non-css files
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== '/\\.css$/'
    );

    // 2. Mirror css features in rollup.config.js
    config.module.rules.push({
      test: /\.css$/i,
      exclude: /node_modules/,
      use: [
        // Order matters
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            // Enables css modules behavior for files containing '*.module.css'
            modules: { auto: true },
            // importLoaders: 1 tells webpack to anticipate postcss-loader next
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              // Mirror the config referenced by rollup.config.js
              config: path.resolve(__dirname, '../postcss.config.js'),
            },
          },
        },
      ],
    });

    return config;
  },
};
