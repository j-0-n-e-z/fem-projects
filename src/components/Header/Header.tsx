import { useContext, type FC } from 'react'

import { LanguageContext } from '@/contexts'
import { translations } from '@/data'

export const Header: FC = () => {
	const [language] = useContext(LanguageContext)

	const text = translations.header.text[language]
	const emoji = translations.header.emoji[language]

	return (
		<header className='mt-16 self-end md:mt-10'>
			<h1 className='px-5 text-center text-lg font-bold dark:text-white md:px-0 md:text-2xl lg:text-3xl'>
				{emoji} {text}{' '}
				<a
					className='underline decoration-blue-400 decoration-wavy dark:decoration-purple-300'
					href='https://www.frontendmentor.io/'
					rel='noreferrer'
					target='_blank'
					title='Frontend Mentor'
				>
					Frontend Mentor
				</a>{' '}
				{emoji}
			</h1>
		</header>
	)
}
