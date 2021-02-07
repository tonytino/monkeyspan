import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const input = './src/';
const babelConfigFile = './babel.config.js';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// https://github.com/rollup/plugins/tree/master/packages/babel#options
const babelOptions = {
  babelHelpers: 'runtime',
  configFile: babelConfigFile,
  extensions,
};

// https://rollupjs.org/guide/en/#big-list-of-options
export default {
  input,
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      name: pkg.name,
      sourcemap: true,
    },
  ],
  // https://github.com/rollup/plugins
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
    alias({
      // Support importing from src in non-css files
      // So you can do `import Thing from 'src/components/Thing'` anywhere
      entries: [{ find: 'src', replacement: './src' }],
    }),
    commonjs(),
    resolve({ extensions }),
    babel(babelOptions),
    postcss(),
  ],
};
