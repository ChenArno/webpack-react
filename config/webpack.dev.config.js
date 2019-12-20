/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-12 14:59:42
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-20 11:03:23
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

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
    hot: true,
    // 如果使用webpack-dev-server，需要设为true，禁止显示devServer的console信息
    quiet: true,
    // 编译出现错误时，将错误直接显示在页面上
    overlay: true,
  },
  plugins: [
    // 环境变量配置
    new webpack.DefinePlugin({
      'process.env': require('./dev.env')
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    // HotModuleReplacementPlugin是webpack热更新的插件，
    // 设置devServer.hot为true，并且在plugins中引入HotModuleReplacementPlugin插件即可。
    // 还需要注意的是我们开启了hot，
    // 那么导出不能使用chunkhash，需要替换为hash。
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here:http://127.0.0.1:8000`]
      },
      // onErrors:,
      clearConsole: true
    })
  ]
})