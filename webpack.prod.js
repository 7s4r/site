var webpack = require("webpack")
var path = require("path")
var autoprefixer = require("autoprefixer")

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, "../src/index"),
    "file?name=index.html!jade-html!./src/index.jade"
  ],
  output: {
    path: "../build",
    filename: "[name].js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {
        test: /\.jade$/,
        loader: "jade"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.scss$/,
        loader: "style!css?sourceMap!postcss!sass?sourceMap"
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
  postcss: [autoprefixer],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
    new webpack.ProvidePlugin({
      'React': 'react',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    root: path.resolve(__dirname, ""),
    extensions: ["", ".js", ".scss", ".json"],
    modulesDirectories: ["src", "node_modules"]
  }
}
