/**
 * Created by Administrator on 2017/4/1 0001.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: "./js/root.js",
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            //query: {
                //presets: ['react', 'es2015'],
                //plugins: ["import", { "libraryName": "antd", "style": "css" }]
            //}
        },

            {
                test: /\.css$/,
                //loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                loader: 'style-loader!css-loader'
            }
        ]
    },

    output: {
        path: __dirname + '/src/',
        publicPath: '/src/',
        filename: 'bundle.js'
    }
};