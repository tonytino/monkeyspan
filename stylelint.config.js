// https://stylelint.io/user-guide/usage/cli
// https://stylelint.io/user-guide/configure
module.exports = {
  extends: [
    // https://github.com/stylelint/stylelint-config-recommended
    'stylelint-config-recommended',
    // Only add before prettier, per their docs:
    // https://github.com/prettier/stylelint-config-prettier
    'stylelint-config-prettier',
  ],
};
