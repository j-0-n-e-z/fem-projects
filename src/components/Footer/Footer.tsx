import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { TelelgramIcon } from '@/components'

export const Footer: FC = () => {
	const { t } = useTranslation()

	return (
		<footer className='mb-6 w-full self-end font-bold'>
			<div className='flex items-center justify-center gap-x-2 text-gray-800 dark:text-white'>
				<span>{t('footer')}</span>
				<a
					className='transition hover:scale-90 active:scale-75'
					href='https://t.me/j_0_n_e_z'
					rel='noreferrer'
					target='_blank'
				>
					<TelelgramIcon />
				</a>
			</div>
		</footer>
	)
}
