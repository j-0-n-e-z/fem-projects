import { capitalize, snakeCase } from 'lodash-es'
import { ChangeEvent, FC, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { addOnsData } from '../../data/addOnsData'
import { formatPrice } from '../../helpers/formatPrice'
import { FormItems, AddOn as TAddOn } from '../../types'
import styles from './AddOn.module.scss'

type AddOnProps = {
	addOn: TAddOn
}

export const AddOn: FC<AddOnProps> = ({ addOn }) => {
	const { getValues, setValue } = useFormContext<FormItems>()
	const period = getValues('period')
	const [isPicked, setIsPicked] = useState(getValues('addOns').includes(addOn))

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.checked) {
			setValue('addOns', getValues('addOns').concat(addOn))
		} else {
			setValue(
				'addOns',
				getValues('addOns').filter(x => x !== addOn)
			)
		}

		setIsPicked(!isPicked)
	}

	return (
		<label htmlFor={addOn} className={styles.addOn}>
			<input
				className={styles.addOn__checkbox}
				id={addOn}
				type='checkbox'
				onChange={handleChange}
				checked={isPicked}
				autoFocus
			/>
			<div className={styles.addOn__info}>
				<span className={styles.addOn__info__title}>
					{capitalize(snakeCase(addOn).replace('_', ' '))}
				</span>
				<span className={styles.addOn__info__description}>
					{addOnsData[addOn].description}
				</span>
			</div>
			<span className={styles.addOn__price}>
				{formatPrice(addOnsData[addOn][period], period)}
			</span>
		</label>
	)
}
