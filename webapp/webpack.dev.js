const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // devtool: 'inline-source-map',
  mode: (process.env.NODE_ENV || 'development'),
  devServer: {
  // refer this for more proxy configuration and more options --> https://webpack.js.org/configuration/dev-server/
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  }
});