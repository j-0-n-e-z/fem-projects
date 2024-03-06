import { createContext } from 'react'

export type LanguageContextType = [Language, (language: Language) => void]

export const LanguageContext = createContext<LanguageContextType>([
	'en',
	() => {}
])
