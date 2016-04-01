var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    filename: 'bundle.js',
    inject: 'body'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.jade'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jade$/,
        loader: "jade"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel!eslint"
      },
      {
        test: /\.jsx$/,
        loader: "react-hot!babel?stage=0"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.json/,
        loader: "json"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  devServer: {
    contentBase: './src',
    hot: true,
    inline: true,
    colors: true,
    progress: true,
    profile: true,
    watch: true
  }
}
