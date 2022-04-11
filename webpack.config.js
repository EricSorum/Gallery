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
           use: [
             'file-loader',
             {
               loader: 'image-webpack-loader',
               options: {
                 bypassOnDebug: true,
                 disable: true,
               },
               optipng: {
                 enabled: false,
               },
               pnquant: {
                 quality: [0.65, 0.90],
                 speed: 4
               },
               gifsicle: {
                 interlaced: false,
               },
               webp: {
                 quality: 75
               }
             }
           ]
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