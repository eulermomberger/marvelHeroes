module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/prop-types': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'jsx-quotes': 'off',
  },
};
