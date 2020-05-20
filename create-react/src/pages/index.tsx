import React from 'react'
import { Button, Tag } from 'antd'
import styles from './index.module.less'

interface IndexProps {

}


const Login: React.FC<IndexProps> = (props) => {
	const obj = Object.assign({}, { label: 1 }, { value: 11 })
	return (<div>home{obj.label}
		<Button>ssss</Button>
		<Tag color="red">red</Tag>
		<a className={styles.a} href={undefined}>切换</a>
	</div >)
}

export default Login