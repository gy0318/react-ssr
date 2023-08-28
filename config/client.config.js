const path = require("path")
const { merge } = require("webpack-merge")
const commonConfig = require("./common.config")
module.exports = merge(commonConfig, {
  target: "web",
  mode: "development",
  entry: "./src/client/index.jsx",
  output: {
    path: path.resolve(__dirname, "../build/client"),
    filename: "./bundle.client.js"
  }
})