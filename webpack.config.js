const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    devtool: "source-map",
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: isProduction ? JSON.stringify("production") : JSON.stringify("development")
            }
        })
    ],
    devServer: {
        contentBase: [path.join(__dirname, "."), path.join(__dirname, "dist"), path.join(__dirname, "styles")],
        compress: true,
        port: 9000,
        index: "index.html"
    }
};