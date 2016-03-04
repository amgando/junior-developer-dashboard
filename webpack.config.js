/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_src = path.resolve(__dirname, 'src');
var dir_js = path.resolve(__dirname, 'src/js');
var dir_html = path.resolve(__dirname, 'src/html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(dir_js, 'main.js'),
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: dir_build,
  },
  module: {
    loaders: [
      {
        loader: 'react-hot',
        test: dir_js,
      },
      {
        loader: 'babel-loader',
        test: dir_js,
        query: {
          presets: ['es2015', 'react'],
        },
      }
    ]
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      { from: dir_html }, // to: output.path
      { from: path.resolve(dir_src, 'manifest.json') }
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
