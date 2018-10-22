const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/pages/index/index.js'
  },
  output: {
    path: __dirname + "/dist/",
    filename: 'static/js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader:'file-loader',
          options: {
            name: '/static/font/[hash].[ext]',
          }
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders:{
            css: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: 'css-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /.(jpg|png|gif|svg)$/,
    　　loader: 'url-loader?limit=1024&name=[hash].[ext]&outputPath=static/img/&publicPath=/static/img/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/index.html',
      template: __dirname + '/src/pages/index/index.html',
      chunks: ['index'],
      minify: {
        collapseWhitespace: true,
      }
    }),
    new ExtractTextPlugin({filename: 'static/css/[name].[hash].css', allChunks: true}),
    new VueLoaderPlugin(),
    new uglifyjs(),
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: __dirname,
        exclude:['json'],
        verbose: true,
        dry: false
      }
    )
  ],
  optimization: {
      minimizer: [new optimizeCss({})],
  },
  devServer: {  
    contentBase: "./dist/",  
    historyApiFallback: true,  
    inline: true,  
    hot: true
  }
}
