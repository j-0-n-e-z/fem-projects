import { FC } from 'react'
import styles from './ThankYou.module.scss'

export const ThankYou: FC = () => {
	return (
		<div className={styles.thankYou}>
			<img src='./images/icon-thank-you.svg' alt='thank you' />
			<h2 className={styles.thankYou__title}>Thank you!</h2>
			<p className={styles.thankYou__message}>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com
			</p>
		</div>
	)
}
