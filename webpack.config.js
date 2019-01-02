// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pug = {
  test: /\.pug$/,
  use: [{
    loader: 'html-loader?minimize=false'
  },
  {
    loader: 'pug-html-loader',
    options: {
      pretty: true
    }
  }]
}

const html = {
  test: /\.html$/,
  use: [{ loader: "html-loader", options: { minimize: false } }]
}

const scss = {
  test: /\.scss$/,
  use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
}

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: { loader: 'babel-loader' }
}

const img = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    {
      // loader: 'url-loader',
      loader: 'file-loader',
      options: {
        // limit: 10000,
        name: '[name].[ext]',
        outputPath: 'img/'
      }
    },
    'img-loader'
  ]
}

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js'
  },
  module: {
    rules: [ pug, scss, js, img ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.pug",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
      chunkFilename: '[id].css'
    })
  ]
}

module.exports = config
