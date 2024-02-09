import { useEffect, useState } from 'react'

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

	const setThemeFromLocalStorage = (isToggling = false) => {
		const theme = localStorage.getItem('theme')
		const isLight = JSON.parse(theme ?? '{}') === 'light'

		if (theme === null || (theme && isLight)) {
			setTheme(isToggling ? 'dark' : 'light')
			return
		}

		if (!isLight) {
			setTheme(isToggling ? 'light' : 'dark')
		}
	}

	useEffect(() => {
		setThemeFromLocalStorage()
	}, [])

	return { currentTheme, toggleTheme: () => setThemeFromLocalStorage(true) }
}
