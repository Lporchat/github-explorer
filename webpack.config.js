const path = require("path");
const htmlwebpack = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // aquivos suportados
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new htmlwebpack({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
