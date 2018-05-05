const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = merge(common, {
  devtool: 'source-map',
  mode: (process.env.NODE_ENV || 'production'),
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version),
     'process.env': {
        'NODE_ENV': JSON.stringify('production')  //'"production"'
      }
    })
  ]
});
