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
  ],
  plugins: ["jest", "react"],
  rules: {
    "react/jsx-props-no-spreading": "off",
  },
};
