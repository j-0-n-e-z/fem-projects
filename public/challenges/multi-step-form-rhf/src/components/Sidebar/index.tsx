import cn from 'classnames'
import { FC } from 'react'
import { sidebarStepLabels } from '../../data/formStepsData'
import styles from './Sidebar.module.scss'

type SidebarProps = {
	currentStepIndex: number
}

export const Sidebar: FC<SidebarProps> = ({ currentStepIndex }) => {
	return (
		<div className={styles.sidebar}>
			{sidebarStepLabels.map((stepLabel, stepIndex, { length: stepsCount }) => (
				<div key={stepLabel} className={styles.sidebar__step}>
					<span
						className={cn(styles.sidebar__step__num, {
							[styles['sidebar__step__num--current']]:
								stepIndex === currentStepIndex ||
								(stepIndex === stepsCount - 1 && currentStepIndex > stepsCount - 1)
						})}
					>
						{stepIndex + 1}
					</span>
					<div className={styles.sidebar__step__info}>
						<span className={styles.sidebar__step__info__title}>
							step {stepIndex + 1}
						</span>
						<span className={styles.sidebar__step__info__description}>
							{stepLabel}
						</span>
					</div>
				</div>
			))}
		</div>
	)
}
