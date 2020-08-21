const path = require('path');

module.exports = {
  mode: 'production',
  entry: './stories/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
    chunkFilename: 'bundle.chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
