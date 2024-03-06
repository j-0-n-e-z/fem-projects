import { useEffect, useState } from 'react'

const DEFAULT_THEME: Theme = 'light'

export const useTheme = () => {
	const [currentTheme, setCurrentTheme] = useState<Theme>()

	const setTheme = (theme: Theme) => {
		if (theme === 'light') {
			document.documentElement.classList.remove('dark')
		} else {
			document.documentElement.classList.add('dark')
		}
		localStorage.setItem('theme', JSON.stringify(theme))
		setCurrentTheme(theme)
	}

	const setThemeFromLocalStorage = () => {
		const theme = localStorage.getItem('theme')

		if (theme === null) {
			setTheme(DEFAULT_THEME)
		} else {
			setTheme(JSON.parse(theme) as Theme)
		}
	}

	const toggleTheme = () => {
		if (currentTheme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	useEffect(() => {
		setThemeFromLocalStorage()
	}, [])

	return [currentTheme, toggleTheme] as const
}
