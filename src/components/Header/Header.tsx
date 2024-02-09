import { useContext, type FC } from 'react'

import { translations } from '@/data'
import { LanguageContext } from '@/src/context/LanguageContext'

export const Header: FC = () => {
	const language = useContext(LanguageContext)

	return (
		<header className='mt-16 self-end md:mt-10'>
			<h1 className='text-center text-xl font-bold dark:text-white md:text-3xl lg:text-4xl'>
				🎉 {translations[language].header}
				<a
					href='https://www.frontendmentor.io/'
					rel='noreferrer'
					target='_blank'
					title='Frontend Mentor'
				>
					FEM
				</a>{' '}
				🎉
			</h1>
		</header>
	)
}
