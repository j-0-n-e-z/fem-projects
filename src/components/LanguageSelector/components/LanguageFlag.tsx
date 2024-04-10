import type { FC } from 'react'

interface LanguageFlagProps {
	language: string
}

export const LanguageFlag: FC<LanguageFlagProps> = ({ language }) => (
	<img alt={language} src={`./assets/flags/${language.slice(0, 2)}.png`} />
)
