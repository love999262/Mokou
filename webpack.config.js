var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, './src/js/mokou.js')
    ],
    output: {
        path: path.resolve(__dirname, 'publish'),
        filename: 'mokou.min.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['es2015']
            }
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=8192&name=[path][name].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
