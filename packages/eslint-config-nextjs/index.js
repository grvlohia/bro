module.exports = {
  extends: ['next/core-web-vitals', 'turbo', '../../.eslintrc.js'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off'
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')]
    }
  }
}
