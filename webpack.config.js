const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 8080,
      open: true,
      hot: true,
      watchFiles: [path.resolve(__dirname, 'src')]
    },
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
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Gallery',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        }),
    ],
}