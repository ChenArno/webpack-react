import * as React from 'react'
import styles from './index.less'

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return <div className={styles['wrt-index']}>weclome Home</div>
  }
}

export default Home
