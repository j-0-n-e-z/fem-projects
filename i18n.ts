import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './src/data/locales/en.json'
import es from './src/data/locales/es.json'
import ru from './src/data/locales/ru.json'

const FALLBACK_LANGUAGE = 'ru'
const resources = { en, es, ru }
const convertDetectedLanguage = (lng: string) => (lng.slice(0, 2) === 'en' ? 'en' : lng)

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		detection: {
			convertDetectedLanguage
		},
		fallbackLng: FALLBACK_LANGUAGE,
		interpolation: {
			escapeValue: false
		},
		resources
	})
