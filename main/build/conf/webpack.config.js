var CopyWebpackPlugin = require('copy-webpack-plugin');
let Path = require("path")

module.exports = {
    // entry: ['./src/index.jsx'],
    entry: ['./src/ui/paginator/index.js'],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.s?css$/,
                loaders: ["style-loader", "css-loader", 'sass-loader']
            }, {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: "url-loader?name=images/[name].[ext]&limit=10000"
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=/fonts/[name].[ext]&limit=10000'
            }
        ]
    },
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx',
            '.css',
            '.scss',
            '.png'
        ]
    },
    output: {
        // path: Path.resolve("build/dist"),
        path: Path.resolve("build/npm/paginator"),
        // filename: "bundle.js",
        filename: "index.js",
        // publicPath: "/test/",
        library: 'shared-components',
        libraryTarget: 'umd'
    },
    devServer: {
        // contentBase: './assets/',
        port: 7777,

        // publicPath: "/test/",
        hot: true,
        contentBase: "./assets",
        // historyApiFallback: true,
        //     stats: {
        //     colors: true,
        //     chunks: false
        // },
        disableHostCheck: true,
        // inline: true,
    },
    plugins: [new CopyWebpackPlugin([
            {
                from: "./assets/",
                to: "./"
            }
        ]

        )],
        devtool: process.env.NODE_ENV
            ? ""
            : "inline-source-map"

}
