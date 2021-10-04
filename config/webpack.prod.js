const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const dirname = path.resolve(__dirname, '../src');

module.exports = {
    mode: 'production',
    context: dirname,
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: "./index.html" })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    resolve: {
        roots: [dirname],
        modules: [
            path.resolve(dirname),
            'node_modules',
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'json']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
        ]
    },
}