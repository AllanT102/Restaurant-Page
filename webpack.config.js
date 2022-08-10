const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/components/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },  
        ]
    },
};