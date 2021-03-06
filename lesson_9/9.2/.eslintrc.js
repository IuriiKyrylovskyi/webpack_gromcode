module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint-config-airbnb-base",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
  },
};
