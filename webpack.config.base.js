const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin

    new HtmlWebpackPlugin({
      title: 'My first webpack-page',
      template:'./src/assets/index.html'
    }),


  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.styl$/,
        loader: ["style-loader","css-loader","stylus-loader"], // compiles Less to CSS
      },
      {
        test: /\.less$/,
        loader: ["style-loader","css-loader","less-loader"], // compiles Less to CSS
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
            },
          },
        ],
      },
    ],
  },
};