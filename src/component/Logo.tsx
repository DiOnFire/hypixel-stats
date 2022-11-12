import React, { FC } from 'react'
import { Text } from '@nextui-org/react'

const Logo: FC<{}> = () => {
	return (
		<Text
			h2
			size={30}
			css={{
				textGradient: '45deg, $blue600 -20%, $pink600 50%'
			}}
			weight='bold'
		>
			Hypixel Stats
		</Text>
	)
}

export default Logo
