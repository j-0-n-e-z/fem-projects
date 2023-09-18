import { FC } from 'react'
import { addOnsData } from '../../data/addOnsData'
import { AddOn as TAddOn } from '../../types'
import { AddOn } from './AddOn'
import styles from './PickAddOns.module.scss'

export const PickAddOns: FC = () => {
	const addOnLabels = Object.keys(addOnsData) as Array<TAddOn>

	return (
		<>
			<div className={styles.addOns}>
				{addOnLabels.map(addOn => (
					<AddOn key={addOn} addOn={addOn} />
				))}
			</div>
		</>
	)
}
