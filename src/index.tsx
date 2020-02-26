/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 15:05:48
 * @LastEditors: chenArno
 * @LastEditTime: 2020-02-26 10:25:00
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Home from 'pages/home.tsx'
import './assets/css/index.less'
// import background from '@/assets/images/background.jpg'

console.log(process.env)
ReactDOM.render(<Home />, document.getElementById('root'))
