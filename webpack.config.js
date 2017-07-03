const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    eventPage: './src/eventPage.js',
    contentScript: './src/contentScript.js',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2017', 'react'],
        },
        exclude: /node_modules/,
      },
    ],
  },
};
