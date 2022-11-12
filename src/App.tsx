import { Button, Input } from '@nextui-org/react'
import React, { FC } from 'react'
import Navbar from './component/Navbar'
import Hypixel from 'hypixel-api-reborn'

const App: FC<{}> = () => {
	const getPlayer = () => {
		const client = new Hypixel.Client("")
		client.getPlayer()
	}

	return (
		<>
			<Navbar />
			<div
				style={{
					width: '100vw',
					height: 'calc(100vh - 150px)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Input shadow clearable labelPlaceholder='Enter nickname...' status='default' width='300px' />
				<Button shadow auto css={{marginLeft: "10px"}}>
					Search
				</Button>
			</div>
		</>
	)
}

export default App
