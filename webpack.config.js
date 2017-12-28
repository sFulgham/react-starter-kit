const path = require('path');
const webpack = require('webpack');

const vendor = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor'
});

const config = {
  resolve: {
    modules: [
      path.resolve('./build'), 
      path.resolve('./node_modules')
    ]
  },
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'prop-types',
      'axios'
    ],
    app: ['./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'react', 
            'env', 
            'latest'
          ]
        }
      }
    },
    {
      test: /\.(s*)css$/,
      use: [{
          loader: "style-loader"
      }, {
          loader: "css-loader"
      }, {
          loader: "sass-loader"
      }]
    }]
  },
  plugins: [
    vendor
  ]
};

module.exports = config;