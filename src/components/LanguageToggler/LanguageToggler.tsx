import type { FC } from 'react'

interface LanguageTogglerProps {
	toggleLanguage: () => void
}

export const LanguageToggler: FC<LanguageTogglerProps> = ({
	toggleLanguage
}) => <button onClick={toggleLanguage}>LanguageToggler</button>
