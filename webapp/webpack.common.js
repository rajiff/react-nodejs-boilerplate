const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        //loader: ["babel-loader", "eslint-loader"]
        loader: "babel-loader",
        query: {
          presets: ['env', "es2015", "react", "stage-2"]
        },
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader?modules',
        exclude: '/node_modules/',
      },
      {
        test: /(\.scss|\.css)$/,
        loader: 'style!css?modules!sass',
        include: path.resolve(__dirname, 'react-flexbox-grid'),
        exclude: /(node_modules)/
      },
      {
        test: /\.svg$/,
        use: [{
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AppTemplate',
      template: './public/index.html',
      favicon: './public/favicon.ico'
      // inject: 'body'
    })
  ],
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};