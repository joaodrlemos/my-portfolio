const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
      safelist: {
        standard: [/^svg-/, /^icon-/, /^text-/],
      },
    }),
  ],
};
