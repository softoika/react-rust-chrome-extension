const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin")

module.exports = {
  mode: "development",
  entry: {
    popup: "./src/Popup.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist/")
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "wasm-game-of-life")
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "static", to: "." }
      ]
    })
  ],
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".wasm"]
  }
};
