import { FC } from 'react'
import { plansData } from '../../data/plansData'
import { Plan as TPlan } from '../../types'
import { PeriodToggler } from './PeriodToggler'
import { Plan } from './Plan'
import styles from './SelectPlan.module.scss'

export const SelectPlan: FC = () => {
	const planLabels = Object.keys(plansData) as Array<TPlan>

	return (
		<>
			<div className={styles.plansContainer}>
				<div className={styles.plansContainer__plans}>
					{planLabels.map(plan => (
						<Plan key={plan} plan={plan} />
					))}
				</div>
				<PeriodToggler />
			</div>
		</>
	)
}
