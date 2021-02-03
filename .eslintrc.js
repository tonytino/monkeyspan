module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'prettier',
    'plugin:jest/all',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: [
    'jest',
    'react',
    'jest-dom',
    'testing-library',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'jest/prefer-expect-assertions': 'off',
  },
};
