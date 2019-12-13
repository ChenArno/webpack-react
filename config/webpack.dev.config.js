/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-12 14:59:42
 * @LastEditors: chenArno
 * @LastEditTime: 2019-12-13 10:20:22
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 8000,
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin()
    // HotModuleReplacementPlugin是webpack热更新的插件，
    // 设置devServer.hot为true，并且在plugins中引入HotModuleReplacementPlugin插件即可。
    // 还需要注意的是我们开启了hot，
    // 那么导出不能使用chunkhash，需要替换为hash。
  ]
})