import { capitalize, snakeCase } from 'lodash-es'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { addOnsData } from '../../data/addOnsData'
import { plansData } from '../../data/plansData'
import { formatPrice } from '../../helpers/formatPrice'
import { FormItems } from '../../types'
import styles from './FinishingUp.module.scss'

export const FinishingUp: FC = () => {
	const { getValues, setValue } = useFormContext<FormItems>()
	const [plan, period, addOns] = getValues(['plan', 'period', 'addOns'])

	const handlePlanChange = () => {
		setValue('period', period === 'monthly' ? 'yearly' : 'monthly', {
			shouldValidate: true
		})
	}

	const plansPrice = plansData[plan][period]
	const addOnsPrice = addOns.reduce(
		(sum, addOn) => sum + addOnsData[addOn][period],
		0
	)
	const totalPrice = plansPrice + addOnsPrice

	return (
		<>
			<div className={styles.summary}>
				<div className={styles.summary__plan}>
					<div className={styles.summary__plan__info}>
						<span>
							{capitalize(plan)} ({capitalize(period)})
						</span>
						<button
							type='button'
							autoFocus
							className={styles['summary__plan__info__change-period-btn']}
							onClick={() => handlePlanChange()}
						>
							Change
						</button>
					</div>
					<div className={styles.summary__plan__price}>
						{formatPrice(plansData[plan][period], period)}
					</div>
				</div>
				{addOns.length !== 0 && (
					<div className={styles.addOns}>
						{addOns.map(addOn => (
							<div key={addOn} className={styles.addOns__addOn}>
								<span className={styles.addOns__addOn__title}>
									{capitalize(snakeCase(addOn).replace('_', ' '))}
								</span>
								<span className={styles.addOns__addOn__price}>
									{formatPrice(addOnsData[addOn][period], period)}
								</span>
							</div>
						))}
					</div>
				)}
			</div>
			<div className={styles.total}>
				<span className={styles.total__title}>
					Total (per {period.slice(0, -2)})
				</span>
				<span className={styles.total__price}>
					{formatPrice(totalPrice, period)}
				</span>
			</div>
		</>
	)
}
