const webpack = require("webpack");
const path = require("path");
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';


module.exports = {
    entry: { myAppName: path.resolve(__dirname, "./src/index.js")},
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: production ? '[name].[contenthash].js' : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
    },
    plugins: [
        new ESLintWebpackPlugin({
            overrideConfigFile: path.resolve(__dirname, 'eslint.config.mjs'),
            extensions: ['js', 'jsx'],
            failOnError: false,
            emitWarning: true,
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "TestTusk",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        port:3001,
        hot: true,
    },
    mode: production ? 'production' : 'development',

};

