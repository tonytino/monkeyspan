import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

const inputFile = "./src/index.js";
const babelConfigFile = "./babel.config.js";
const extensions = [".js", ".jsx"];

// https://github.com/rollup/plugins/tree/master/packages/babel#options
const babelOptions = {
  babelHelpers: "runtime",
  configFile: babelConfigFile,
  extensions,
};

const globals = {
  "prop-types": "PropTypes",
  react: "React",
  "react-dom": "ReactDOM",
};

// https://rollupjs.org/guide/en/#big-list-of-options
export default {
  input: inputFile,
  external: Object.keys(globals),
  output: {
    file: pkg.main,
    format: "es",
    globals,
    name: pkg.name,
    sourcemap: true,
  },
  // https://github.com/rollup/plugins
  plugins: [resolve({ extensions }), babel(babelOptions)],
};
