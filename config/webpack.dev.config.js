/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-12 14:59:42
 * @LastEditors: chenArno
 * @LastEditTime: 2019-12-12 15:01:22
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'dev'
})