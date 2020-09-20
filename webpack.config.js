const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    entry1: './src/entry1.tsx',
    entry2: './src/entry2.tsx',
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}
