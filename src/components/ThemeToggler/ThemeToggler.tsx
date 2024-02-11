import type { FC } from 'react'

import { MoonIcon, SunIcon } from '@/components'
import { setThemeInDOM } from '@/helpers'
import { useToggle } from '@/hooks'

export const ThemeToggler: FC = () => {
	const [currentTheme, toggleTheme] = useToggle<Theme>(
		'theme',
		['light', 'dark'],
		setThemeInDOM
	)

	return (
		<button
			className='toggle-button absolute right-4 top-4'
			onClick={toggleTheme}
		>
			{currentTheme === 'light' ? <MoonIcon /> : <SunIcon />}
		</button>
	)
}
