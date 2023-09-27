import { FC } from 'react'
import common from '../../Common.module.scss'
import styles from './ThankYou.module.scss'
import cn from 'classnames'

type ThankYouProps = {
	selectedRating: number
}

export const ThankYou: FC<ThankYouProps> = ({ selectedRating }) => {
	return (
		<div className={`${common.form} ${styles.center}`}>
			<img
				className={styles['thank-you-img']}
				src='assets/images/illustration-thank-you.svg'
				alt='thank-you'
			/>
			<p className={styles['selected-rating']}>
				You selected {selectedRating} out of 5
			</p>
			<h2 className={cn(common.title, styles['title--thank-you'])}>
				Thank you!
			</h2>
			<p className={common.description}>
				We appreciate you taking the time to give a rating. If you ever need
				more support, don't hesitate to get in touch!
			</p>
		</div>
	)
}
