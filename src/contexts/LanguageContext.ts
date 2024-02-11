import { createContext } from 'react'

export type LanguageContextType = [Language, () => void]

export const LanguageContext = createContext<LanguageContextType>(['ru', () => {}])
