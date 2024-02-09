import type { FC } from 'react'

import { MoonIcon, SunIcon } from '@/components'
import { useTheme } from '@/src/hooks'

export const ThemeToggler: FC = () => {
	const { currentTheme, toggleTheme } = useTheme()

	return (
		<button
			className='absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border-2 border-gray-800 transition-all hover:border-gray-600 hover:bg-gray-100 dark:border-white hover:dark:bg-slate-600'
			onClick={toggleTheme}
		>
			{currentTheme === 'light' ? <MoonIcon /> : <SunIcon />}
		</button>
	)
}
