const path = require('path')
const nodeExternals = require("webpack-node-externals")
const { merge } = require("webpack-merge")
const commonConfig = require("./common.config")
module.exports = merge(commonConfig, {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "../build/server"),
    filename: "bundle.server.js"
  },
  externals: [nodeExternals()]
})