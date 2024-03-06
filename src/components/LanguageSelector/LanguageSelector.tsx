import { useContext, useState, type FC } from 'react'

import { LanguageFlag } from '@/components'
import { LanguageContext } from '@/contexts'
import { languages } from '@/data'

export const LanguageSelector: FC = () => {
	const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext)
	const [showLanguages, setShowLanguages] = useState(false)

	const onSelectorClick = (language: Language) => {
		setCurrentLanguage(language)
		setShowLanguages(false)
	}

	console.log(currentLanguage)

	return (
		<>
			<button
				className='toggle-button absolute left-4 top-4'
				onClick={() => setShowLanguages(prev => !prev)}
			>
				<LanguageFlag language={currentLanguage} />
			</button>
			{showLanguages && (
				<ul className='absolute left-4 top-14 space-y-2'>
					{languages
						.filter(language => language !== currentLanguage)
						.map(language => (
							<li key={language}>
								<button
									className='toggle-button'
									onClick={() => onSelectorClick(language)}
								>
									<LanguageFlag language={language} />
								</button>
							</li>
						))}
				</ul>
			)}
		</>
	)
}
