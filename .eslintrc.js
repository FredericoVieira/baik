module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    semi: 0,
    'comma-dangle': 0,
    'import/no-named-as-default': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 'warn',
    'no-unused-expressions': 'warn',
    'no-nested-ternary': 'warn',
    'no-multi-str': 'warn',
    'no-shadow': 'warn',
    'object-shorthand': 'warn'
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true
  },
  parser: 'babel-eslint'
}
