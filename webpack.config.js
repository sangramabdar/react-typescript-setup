const currentTask = process.env.npm_lifecycle_event;

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "development",

  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),

    filename: "bundle.[hash].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },

  devtool: "source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};

if (currentTask == "build") {
  config.mode = "production";
  config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "index.[hash].css",
    })
  );
}

module.exports = config;
