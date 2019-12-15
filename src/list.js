import React from 'react'

class ListItem extends React.Component {
  numbers = [1, 2, 3, 4, 5]
  render() {
    return this.numbers.map(v => {
      return <li key={v}>{v}</li>
    })
  }
}
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>
        <ul>
          <ListItem />
        </ul>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }
}

export default List
