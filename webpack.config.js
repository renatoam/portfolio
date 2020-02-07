const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  entry: {
    main: path.join(__dirname, 'src/js', 'main')
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'script.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'Fonts/',
            publicPath: '../Fonts/'
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env',
          ]
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    
  ]
}