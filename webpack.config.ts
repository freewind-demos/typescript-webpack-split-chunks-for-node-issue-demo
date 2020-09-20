import {Configuration} from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: 'development',
  target: 'node',
  entry: {
    entry1: './src/entry1.ts',
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    umdNamedDefine: false
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}

export default config;

