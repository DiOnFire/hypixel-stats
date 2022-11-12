import { Switch, useTheme } from '@nextui-org/react'
import { FC } from 'react'

const ThemeSwitch: FC<{}> = () => {
    const {isDark, type } = useTheme()
    

	return <Switch shadow color='primary' checked={isDark} onChange={() => darkMode.toggle()}></Switch>
}

export default ThemeSwitch
