import type { FC } from 'react'
import { useContext } from 'react'

import { TelelgramIcon } from '@/components'
import { LanguageContext } from '@/contexts'
import { translations } from '@/data'

export const Footer: FC = () => {
	const [language] = useContext(LanguageContext)

	return (
		<footer className='mb-6 w-full self-end font-bold'>
			<div className='flex items-center justify-center gap-x-2 text-gray-800 dark:text-white'>
				<span>{translations.footer[language]}</span>
				<a href='https://t.me/j_0_n_e_z' rel='noreferrer' target='_blank'>
					<TelelgramIcon />
				</a>
			</div>
		</footer>
	)
}
