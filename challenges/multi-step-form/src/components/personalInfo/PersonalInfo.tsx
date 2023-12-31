import { FC, useEffect } from 'react'
import styles from './PersonalInfo.module.scss'
import form from '../Form.module.scss'
import cn from 'classnames'
import { useCustomErrors } from '../../hooks/useCustomErrors'
import { DefaultProps } from '../../types'

type PersonalInfoProps = DefaultProps & {
	isSubmitTried: boolean
}

export const PersonalInfo: FC<PersonalInfoProps> = ({
	personalInfo,
	updateFormData,
	isSubmitTried
}) => {
	const {
		errors,
		touched,
		setTouched,
		setFieldErrorOnChange,
		setFieldRequiredError
	} = useCustomErrors(Object.keys(personalInfo))

	useEffect(() => {
		if (!isSubmitTried) return
		for (const key in personalInfo) {
			if (!personalInfo[key]) setFieldRequiredError(key)
		}
	}, [isSubmitTried])

	const handleOnChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		field: string
	) => {
		updateFormData({
			personalInfo: { ...personalInfo, [field]: e.target.value }
		})
		setFieldErrorOnChange(e, field)
	}

	const handleOnBlur = (
		e: React.FocusEvent<HTMLInputElement, Element>,
		field: string
	) => {
		setTouched(prev => ({ ...prev, [field]: true }))
		setFieldErrorOnChange(e, field)
	}

	return (
		<div className={form.formContent}>
			<div className={form.title}>Personal Info</div>
			<p className={form.description}>
				Please provide your name, email address, and phone number.
			</p>
			<div className={styles.label}>
				<label htmlFor='name'>Name</label>
				{errors.name && touched.name && (
					<div className={styles.labelError}>{errors.name}</div>
				)}
			</div>
			<input
				className={cn(styles.input, {
					[styles.inputError]: errors.name && touched.name
				})}
				id='name'
				name='name'
				value={personalInfo.name}
				placeholder='e.g. Stephen King'
				onChange={e => handleOnChange(e, 'name')}
				onBlur={e => handleOnBlur(e, 'name')}
				autoComplete='name'
				required
			/>
			<div className={styles.label}>
				<label htmlFor='email'>Email Address</label>
				{errors.email && touched.email && (
					<div className={styles.labelError}>{errors.email}</div>
				)}
			</div>
			<input
				className={cn(styles.input, {
					[styles.inputError]: errors.email && touched.email
				})}
				id='email'
				type='email'
				name='email'
				value={personalInfo.email}
				placeholder='e.g. stephenking@lorem.com'
				onChange={e => handleOnChange(e, 'email')}
				onBlur={e => handleOnBlur(e, 'email')}
				autoComplete='email'
				required
			/>
			<div className={styles.label}>
				<label htmlFor='phone'>Phone Number</label>
				{errors.phone && touched.phone && (
					<div className={styles.labelError}>{errors.phone}</div>
				)}
			</div>
			<input
				className={cn(styles.input, {
					[styles.inputError]: errors.phone && touched.phone
				})}
				id='phone'
				type='tel'
				name='phone'
				value={personalInfo.phone}
				placeholder='e.g. +1 234 567 890'
				onChange={e => handleOnChange(e, 'phone')}
				onBlur={e => handleOnBlur(e, 'phone')}
				pattern='\+?\d( ?)\d{3}\1\d{3}\1\d{3}'
				required
			/>
		</div>
	)
}
