import type { FC } from 'react'

interface LanguageFlagProps {
	language: Language
}

export const LanguageFlag: FC<LanguageFlagProps> = ({ language }) => (
	<img alt={language} src={`./assets/flags/${language}.png`} />
)
