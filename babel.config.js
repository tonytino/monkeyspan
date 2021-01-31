const plugins = [
  // https://babeljs.io/docs/en/babel-plugin-transform-runtime#options
  ["@babel/plugin-transform-runtime", {}],
];

const presets = [
  // https://babeljs.io/docs/en/babel-preset-env#options
  [
    "@babel/env",
    {
      // Browsers to polyfill for
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
  // https://babeljs.io/docs/en/babel-preset-react#options
  ["@babel/preset-react", {}],
];

// https://babeljs.io/docs/en/options
module.exports = { plugins, presets };
