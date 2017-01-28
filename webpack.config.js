const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { join } = require('path');

module.exports = {
  entry: {
    app: './src/ui/index.js',
    admin: './src/ui/admin.js'
  },
  output: {
    path: join(__dirname, 'ui'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'react']
        }
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract(['style-loader', 'css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.js')
  ]
};