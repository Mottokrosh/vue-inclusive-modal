module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'vue',
  // add your custom rules here
  'rules': {
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    requestAnimationFrame: true,
    performance: true
  }
}
