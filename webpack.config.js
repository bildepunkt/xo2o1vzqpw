const path = require("path");

module.exports = {
  entry: {
    sprite: "./demo/pages/sprite/index.ts",
    text: "./demo/pages/text/index.ts",
    tile: "./demo/pages/tile/index.ts"
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "demo", "bundles")
  }
};
