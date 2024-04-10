import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import type en from '../../data/locales/en.json'

interface ErrorElementProps {
	errorType: keyof typeof en.translation.errors
}

export const ErrorElement: FC<ErrorElementProps> = ({ errorType }) => {
	const { t } = useTranslation()
	// TODO: must use preferred language instead of just 'ru'
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
				😭 {t(`errors.${errorType}`)}
			</h2>
		</div>
	)
}
