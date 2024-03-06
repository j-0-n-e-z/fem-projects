import { useEffect, useState } from 'react'

import { languages } from '@/data'

const DEFAULT_LANGUAGE = 'en'
const LOCAL_STORAGE_ITEM = 'lang'

function getPreferredLanguage(): Language {
	const preferredLanguages = navigator.languages

	for (const language of preferredLanguages) {
		const currentLanguage = language.slice(0, 2) as Language
		if (languages.includes(currentLanguage)) {
			return currentLanguage
		}
	}

	return DEFAULT_LANGUAGE
}

export const useLanguage = () => {
	const [currentLanguage, setCurrentLanguage] =
		useState<Language>(DEFAULT_LANGUAGE)

	const setLanguage = (language: Language) => {
		localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(language))
		setCurrentLanguage(language)
	}

	const setLanguageFromLocalStorage = () => {
		const language = localStorage.getItem(LOCAL_STORAGE_ITEM)

		if (language === null) {
			setLanguage(getPreferredLanguage())
		} else {
			setLanguage(JSON.parse(language) as Language)
		}
	}

	useEffect(() => {
		setLanguageFromLocalStorage()
	}, [])

	return [currentLanguage, setLanguage] as const
}
