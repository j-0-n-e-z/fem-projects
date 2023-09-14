import { capitalize } from 'lodash-es'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { freeMonthCount, plansData } from '../../data/plansData'
import { formatPrice } from '../../helpers/formatPrice'
import { FormItems, Plan as TPlan } from '../../types'
import styles from './Plan.module.scss'

type PlanProps = {
	plan: TPlan
}

export const Plan: FC<PlanProps> = ({ plan }) => {
	const { register, getValues } = useFormContext<FormItems>()
	const period = getValues('period')
	const selectedPlan = getValues('plan')

	return (
		<label className={styles.plan} htmlFor={plan}>
			<img
				className={styles.plan__icon}
				src={`./images/plans/icon-${plan}.svg`}
				alt={plan}
			/>
			<div className={styles.plan__info}>
				<span className={styles.plan__info__title}>{capitalize(plan)}</span>
				<span className={styles.plan__info__price}>
					{formatPrice(plansData[plan][period], period).slice(1)}
				</span>
				{period === 'yearly' && (
					<span className={styles.plan__info__monthsFree}>
						{freeMonthCount} months free
					</span>
				)}
			</div>
			<input
				id={plan}
				type='radio'
				value={plan}
				autoFocus={plan === selectedPlan}
				{...register('plan')}
			/>
		</label>
	)
}
