/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-12 14:53:30
 * @LastEditors: chenArno
 * @LastEditTime: 2019-12-12 14:54:45
 */
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
	  rules:[
		  {
			  test:/\.(js|jsx)$/,
			  use:'babel-loader',
			  exclude:/node_modules/
		  }
	  ]
  }
}