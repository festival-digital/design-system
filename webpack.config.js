const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './stories/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: '',
    libraryTarget: 'commonjs'
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: path.resolve(__dirname, './stories')
      },
    ]
  }
}
