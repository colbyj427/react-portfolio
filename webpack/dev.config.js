const merge = require('webpack-merge');
const common = require('./common.config.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    // No rules for .css or .scss here; handled in common.config.js
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'static'),
    },
    compress: true,
    port: 3001,
    historyApiFallback: true,
    hot: true,
    open: true
  }
});
