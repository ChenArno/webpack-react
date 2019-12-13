/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 14:57:20
 * @LastEditors: chenArno
 * @LastEditTime: 2019-12-13 14:20:56
 */

import React from 'react'
import './assets/css/index.less'
import background from './assets/images/background.jpg'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>i have change {this.props.name}</h1>
        <img src={background} />
        {console.log('ccccccc')}
      </div>
    )
  }
}

export default App
