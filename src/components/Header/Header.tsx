import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Header: FC = () => {
	const { t } = useTranslation()

	return (
		<header className='mt-20 self-end md:mt-12'>
			<h1 className='px-5 text-center text-[14px] font-bold dark:text-white sm:text-lg md:px-0 md:text-2xl lg:text-3xl'>
				{t('header.emoji')} {t('header.text')}{' '}
				<a
					className='underline decoration-blue-400 decoration-wavy dark:decoration-purple-300'
					href='https://www.frontendmentor.io/'
					rel='noreferrer'
					target='_blank'
					title='Frontend Mentor'
				>
					Frontend Mentor
				</a>{' '}
				{t('header.emoji')}
			</h1>
		</header>
	)
}
