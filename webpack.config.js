const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, './src/app.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'publish'),
        publicPath:"/assets/",
        filename: 'mokou.min.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./publish/",
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }, {
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {
                // quiet: true,
                failOnError: true
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: ['/node_modules/', '*.min.js'],
            options: {
                presets: ['es2015']
            }
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=8192&name=[path][name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_debugger: true,
                // drop_console: true
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery"
        })
    ]
};
