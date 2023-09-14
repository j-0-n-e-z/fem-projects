import { ChangeEvent, FC, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormItems } from '../../types'
import styles from './PeriodToggler.module.scss'

export const PeriodToggler: FC = () => {
	const { getValues, setValue } = useFormContext<FormItems>()
	const [isChecked, setIsChecked] = useState(getValues('period') === 'yearly')

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setValue('period', e.target.checked ? 'yearly' : 'monthly', {
			shouldValidate: true
		})
		setIsChecked(!isChecked)
	}

	return (
		<label htmlFor='toggle' className={styles.toggle}>
			<span className={styles.toggle__case}>Monthly</span>
			<input
				id='toggle'
				type='checkbox'
				className={styles.toggle__btn}
				onChange={handleChange}
				checked={isChecked}
			/>
			<span className={styles.toggle__case}>Yearly</span>
		</label>
	)
}
