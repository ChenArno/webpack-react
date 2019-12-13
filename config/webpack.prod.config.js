/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-12 14:59:29
 * @LastEditors: chenArno
 * @LastEditTime: 2019-12-13 10:53:42
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
// 打包编译前清理dist目录
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 压缩插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 打包独立的css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash:8].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // public/index.html无论与要用的template是不是在一个目录，都是从根路径开始查找
      template: 'public/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
      // filename：打包之后的html文件名字
      // template：以我们自己定义的html为模板生成，不然我们还要到打包之后的html文件中写
      // inject：在body最底部引入js文件，如果是head，就是在head中引入js
      // minify：压缩html文件
      // removeComments：去除注释
      // collapseWhitespace：去除空格
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          preset: ['default', {
            discardComments: {
              removeAll: true
            }
          }],
          canPrint: false
          // 表示插件能够在console中打印信息，默认值是true
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {
        framework: {
          test: 'framework',
          name: 'framework',
          enforce: true
        },
        vendors: {
          priority: -10,
          test: /node_modules/,
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.(sass|scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
    }]
  }
})