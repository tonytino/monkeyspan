module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  plugins: ["react"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
  },
};
