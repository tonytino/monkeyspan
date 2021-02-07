// https://github.com/okonet/lint-staged
module.exports = {
  '*.ts?(x)': () => 'tsc --project tsconfig.json --noEmit',
  '*.{js,jsx,ts,tsx}': 'eslint --cache --fix',
  '*.css': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,css,md}': 'prettier --write',
};
