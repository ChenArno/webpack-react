/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 14:57:20
 * @LastEditors: chenArno
 * @LastEditTime: 2019-12-15 12:03:54
 */

import React from 'react'
import List from './list'
import './assets/css/index.less'
import background from './assets/images/background.jpg'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> weclome {this.props.name} </h1> {/* <img src={background} /> */}{' '}
        {console.log('ccccccc')} <List />
      </div>
    )
  }
}

export default App
