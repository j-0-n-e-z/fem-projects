import cn from 'classnames'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormItems } from '../../types'
import styles from './PersonalInfo.module.scss'

export const PersonalInfo: FC = () => {
	const {
		formState: {
			errors: { personalInfo: errors }
		},
		register
	} = useFormContext<FormItems>()

	return (
		<>
			{/* Name */}
			<div className={styles.inputLabel}>
				<label htmlFor='name'>Name</label>
				{errors?.name && (
					<span className={styles.inputLabel__error}>
						{errors.name?.message}
					</span>
				)}
			</div>
			<input
				className={cn(styles.input, {
					[styles['input--error']]: errors?.name
				})}
				id='name'
				placeholder='e.g. Stephen King'
				autoComplete='name'
				autoFocus
				{...register('personalInfo.name')}
			/>
			{/* Email */}
			<div className={styles.inputLabel}>
				<label htmlFor='email'>Email Address</label>
				{errors?.email && (
					<span className={styles.inputLabel__error}>
						{errors.email?.message}
					</span>
				)}
			</div>
			<input
				className={cn(styles.input, {
					[styles['input--error']]: errors?.email
				})}
				id='email'
				type='email'
				placeholder='e.g. stephenking@lorem.com'
				autoComplete='email'
				{...register('personalInfo.email')}
			/>
			{/* Phone Number */}
			<div className={styles.inputLabel}>
				<label htmlFor='phone'>Phone Number</label>
				{errors?.phone && (
					<span className={styles.inputLabel__error}>
						{errors.phone?.message}
					</span>
				)}
			</div>
			<input
				className={cn(styles.input, {
					[styles['input--error']]: errors?.phone
				})}
				id='phone'
				type='tel'
				placeholder='e.g. +1 234 567 890'
				{...register('personalInfo.phone')}
			/>
		</>
	)
}
