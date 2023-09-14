import cn from 'classnames'
import { FC, useState } from 'react'
import common from '../../Common.module.scss'
import styles from './SelectRating.module.scss'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

type SelectRatingProps = {
	setSelectedRating: (rating: number | undefined) => void
}

export const SelectRating: FC<SelectRatingProps> = ({ setSelectedRating }) => {
	const [currentRating, setCurrentRating] = useState<number | undefined>()

	useOnClickOutside(
		() => setCurrentRating(undefined),
		HTMLLabelElement,
		HTMLButtonElement
	)

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setSelectedRating(currentRating)
	}

	return (
		<form className={common.form} onSubmit={handleFormSubmit}>
			<img className={styles['star-img']} src='assets/icon-star.svg' alt='star' />
			<h2 className={common.title}>How did we do?</h2>
			<p className={common.description}>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>
			<div className={styles['ratings-container']}>
				{[1, 2, 3, 4, 5].map(rating => (
					<label
						key={rating}
						className={cn(styles['ratings-container__rating'], {
							[styles['ratings-container__rating--selected']]:
								rating <= (currentRating ?? 0),
						})}
					>
						<input
							type='radio'
							name='rating'
							onChange={() => setCurrentRating(rating)}
							checked={rating === currentRating}
							hidden
						/>
						{rating}
					</label>
				))}
			</div>
			<button
				className={styles['submit-btn']}
				disabled={!currentRating}
			>
				Submit
			</button>
		</form>
	)
}
