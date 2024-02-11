import { type FC } from 'react'

import { translations } from '@/data'

interface ErrorElementProps {
	errorType: keyof typeof translations.errors
}

export const ErrorElement: FC<ErrorElementProps> = ({ errorType }) => {
	const language = JSON.parse(localStorage.getItem('lang') ?? 'ru') as Language
	const theme = JSON.parse(localStorage.getItem('theme') ?? 'light') as Theme

	if (theme === 'light') {
		document.documentElement.classList.remove('dark')
	} else {
		document.documentElement.classList.add('dark')
	}

	return (
		<div className='flex h-screen items-center justify-center dark:bg-gray-700 dark:text-white'>
			<h2 className='font-Mooli text-4xl font-bold'>
				😭 {translations.errors[errorType][language]}
			</h2>
		</div>
	)
}
