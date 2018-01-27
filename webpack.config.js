const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
                // loaders: ['style-loader', 'css-loader?importLoaders=1'],
                // loader:  ExtractTextPlugin.extract("style-loader", "css-loader")
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
    ],
    devServer: {
        contentBase: [path.join(__dirname, "."), path.join(__dirname, "dist"), path.join(__dirname, "styles")],
        compress: true,
        port: 9000,
        index: "index.html"
    }
};