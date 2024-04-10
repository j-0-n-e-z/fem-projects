import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './src/data/locales/en.json'
import es from './src/data/locales/es.json'
import ru from './src/data/locales/ru.json'

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		detection: {
			convertDetectedLanguage: lng => (lng.slice(0, 2) === 'en' ? 'en' : lng)
		},
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false
		},
		resources: {
			en,
			es,
			ru
		}
	})
