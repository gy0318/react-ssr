module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
}