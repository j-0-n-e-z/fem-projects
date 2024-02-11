import { useContext, type FC } from 'react'

import { LanguageContext } from '@/contexts'

export const LanguageToggler: FC = () => {
	const [language, toggleLanguage] = useContext(LanguageContext)

	return (
		<button
			className='toggle-button absolute left-4 top-4'
			onClick={toggleLanguage}
		>
			{language}
		</button>
	)
}
