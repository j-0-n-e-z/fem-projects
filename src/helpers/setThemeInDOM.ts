export const setThemeInDOM = (theme: Theme) => {
	if (theme === 'light') {
		document.documentElement.classList.remove('dark')
	} else {
		document.documentElement.classList.add('dark')
	}
}
