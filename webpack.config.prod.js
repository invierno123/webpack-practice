const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base=require('./webpack.config.base.js')
module.exports = {
  ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),

  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        //use: ['style-loader', 'css-loader'],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {

                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          'css-loader',
        ],
      },
    ],
  },
};