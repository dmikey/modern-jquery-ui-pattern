var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    // for now we set one entry for the main package.json entry
    entry: {
        app: ['./index.js']
    },

    output: {
        path:path.resolve('./build'),
        filename: "assets/[name].min.js"
    },

    // resolve files
    // we reference a bunch of files in the build tool
    // command dir is the project path
    resolve: {
        extensions: ['.js', '.css'],
        modules: ['./node_modules'],
        alias: {
            'zepto' : 'webpack-zepto',
            'components': __dirname + '/src/components',
            'store' : __dirname + '/src/store',
            'myApp' : __dirname + '/src/index.js',
            'views' : __dirname + '/src/views'
        }
    },
    devtool: "source-map",
    module: {
        loaders: [{
                test: /\.(jpg|svg|png|gif|jpeg)$/,
                loader: "base64-image-loader"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader',
                query: {
                    minimize: true
                }
            },
            {
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'file?name=assets/fonts/[name].[ext]',
                exclude: /components/
            },
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['babel-preset-es2015']
                }
            }
        ],
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            appMountId: 'app',
            title: 'Modern Web App',
            mobile: true,
            template: require('html-webpack-template'),
            links: [
                {href:'https://fonts.googleapis.com/css?family=Lato:300,400', rel:'stylesheet'}
            ]
        })
    ],
};