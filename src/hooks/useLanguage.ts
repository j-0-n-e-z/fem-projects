import { useEffect, useState } from 'react'

export const useLanguage = () => {
	const [currentLanguage, setCurrentLanguage] = useState<Language>()

	const setLanguage = (language: Language) => {
		localStorage.setItem('lang', JSON.stringify(language))
		setCurrentLanguage(language)
	}

	const setLanguageFromLocalStorage = (isToggling = false) => {
		const language = localStorage.getItem('lang')
		const isRu = JSON.parse(language ?? '{}') === 'ru'

		if (language === null || (language && isRu)) {
			setLanguage(isToggling ? 'en' : 'ru')
			return
		}

		if (!isRu) {
			setLanguage(isToggling ? 'ru' : 'en')
		}
	}

	useEffect(() => {
		setLanguageFromLocalStorage()
	}, [])

	return {
		currentLanguage,
		toggleLanguage: () => setLanguageFromLocalStorage(true)
	}
}
