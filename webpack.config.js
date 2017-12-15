const path = require('path');
const webpack = require('webpack');

const config = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 3000
  },
  devtool: 'source-map',
  entry: [
    './client/src/index.jsx'
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: ['node_modules'],
        use: [
          { loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
