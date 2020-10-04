const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
        test: /\.(ts|tsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "static", to: "." }
      ]
    })
  ]
};
