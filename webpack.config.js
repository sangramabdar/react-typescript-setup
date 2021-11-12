const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: "development",

    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [{
                test: /\.(ts|tsx|js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },

            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },

    devServer: {
        open: true,
        historyApiFallback: true,
    },

    devtool: "source-map",

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = config;