const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('webpack-api-mocker');

module.exports = {
  mode: 'development',
  entry: './src/',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
          //   {
          //     loader: ,
          //     options: {
          //       modules: false
          //     }
          //   }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  //   devServer: {
  //     before(app) {
  //       apiMocker(app, path.resolve('mock/api.js'));
  //     },
  //     contentBase: path.resolve(__dirname, '..', 'dist'),
  //     compress: true,
  //     port: 8083
  //   },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  resolve: {
    alias: {},
    extensions: ['.js', '.json', '.css']
  }
};
