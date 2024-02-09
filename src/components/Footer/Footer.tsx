import { useContext } from 'react'

import { translations } from '@/data'
import { LanguageContext } from '@/src/context/LanguageContext'

export const Footer = () => {
	const language = useContext(LanguageContext)

	return (
		<footer className='self-end'>
			<div className='text-gray-800 dark:text-white'>
				{translations[language].footer}
			</div>
		</footer>
	)
}
