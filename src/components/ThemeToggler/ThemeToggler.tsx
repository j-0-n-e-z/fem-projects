import type { FC } from 'react'

import { MoonIcon, SunIcon } from '@/components'
import { useTheme } from '@/hooks'

export const ThemeToggler: FC = () => {
	const [currentTheme, toggleTheme] = useTheme()

	return (
		<button
			className='toggle-button fixed right-4 top-4'
			onClick={toggleTheme}
		>
			{currentTheme === 'light' ? <MoonIcon /> : <SunIcon />}
		</button>
	)
}
