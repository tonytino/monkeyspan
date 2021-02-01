module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:jest/all",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/recommended",
    "plugin:testing-library/react",
  ],
  plugins: ["jest", "react", "jest-dom", "testing-library"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "jest/prefer-expect-assertions": "off",
  },
};
