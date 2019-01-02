const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mqpacker = require('css-mqpacker');
const atImport = require('postcss-import');
const stylelint = require('stylelint');

module.exports = {
  plugins: [
    atImport,
    autoprefixer,
    cssnano({ preset: 'default' }),
    mqpacker,
    // stylelint
  ]
};
