const path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        // Output a "home.js" file from the "home-page.ts" file
        home: './Scripts/home/home-page.ts',
        // Output a "contact.js" file from the "contact-page.ts" file
        contact: './Scripts/contact/contact-page.ts'
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        // Use a plugin which will move all common code into a "vendor" file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    output: {
        // The format for the outputted files
        filename: '[name].js',
        // Put the files in "wwwroot/js/"
        path: path.resolve(__dirname, 'wwwroot/js/')
    }
};