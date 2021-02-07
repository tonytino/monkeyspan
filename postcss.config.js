module.exports = {
  autoModules: true,
  plugins: [
    // https://github.com/csstools/postcss-preset-env
    require('postcss-preset-env')({
      // https://preset-env.cssdb.org/features#stage-2
      stage: 2,
    }),
  ],
};
