import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const useTheme = () => {
	const [currentTheme, setCurrentTheme] = useState<Theme>('light')

	const setTheme = (theme: Theme) => {
		if (theme === 'light') {
			document.documentElement.classList.remove('dark')
		} else {
			document.documentElement.classList.add('dark')
		}
		localStorage.setItem('theme', JSON.stringify(theme))
		setCurrentTheme(theme)
	}

	const setThemeFromLocalStorage = (isToggling = false) => {
		const theme = localStorage.getItem('theme')

		if (theme === null) {
			setTheme(isToggling ? 'dark' : 'light')
			return
		}

		if (JSON.parse(theme) === 'dark') {
			setTheme(isToggling ? 'light' : 'dark')
		} else {
			setTheme(isToggling ? 'dark' : 'light')
		}
	}

	useEffect(() => {
		setThemeFromLocalStorage()
	}, [])

	return { currentTheme, toggleTheme: () => setThemeFromLocalStorage(true) }
}
