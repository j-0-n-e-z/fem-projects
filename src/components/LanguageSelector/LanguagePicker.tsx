import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageFlag } from '@/components'

export const LanguagePicker: FC = () => {
	const { i18n } = useTranslation()
	const [isShowLanguages, setIsShowLanguages] = useState(false)
	const languages = Object.keys(i18n.store.data)
	const currentLanguage = i18n.language

	const onPick = (language: string) => {
		i18n.changeLanguage(language)
		setIsShowLanguages(false)
	}

	return (
		<ul className='fixed left-4 top-4 space-y-2'>
			<li>
				<button
					className='toggle-button'
					onClick={() => setIsShowLanguages(prev => !prev)}
				>
					<LanguageFlag language={currentLanguage} />
				</button>
			</li>
			{isShowLanguages && (
				<>
					{languages
						.filter(language => language !== currentLanguage)
						.map(language => (
							<li key={language}>
								<button
									className='toggle-button'
									onClick={() => onPick(language)}
								>
									<LanguageFlag language={language} />
								</button>
							</li>
						))}
				</>
			)}
		</ul>
	)
}
