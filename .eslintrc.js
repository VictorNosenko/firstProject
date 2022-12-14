module.exports = {
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'configFile': './babel.config.json',
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'extends': ['eslint:recommended', 'google'],
  'rules': {
    'require-jsdoc': 'off',
  },
};
