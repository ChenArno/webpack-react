/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-12 14:59:29
 * @LastEditors: chenArno
 * @LastEditTime: 2019-12-13 09:50:03
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
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
    })
  ]
})