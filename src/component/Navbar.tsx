import { FC } from 'react'
import { Navbar as Bar } from '@nextui-org/react'
import Logo from './Logo'
import ThemeSwitch from './ThemeSwitch'

const Navbar: FC<{}> = () => {
	return (
		<Bar variant='sticky'>
			<Bar.Brand>
                <Logo />
            </Bar.Brand>
		</Bar>
	)
}

export default Navbar
