import { FC } from 'react'
import { Field, inputsData } from './data/inputsData'

type InputPropsType = {
	isErrorOccurred: boolean
	value: string
	field: Field
	errorMessage: string | undefined
	handleChange: (e: React.ChangeEvent) => void
	handleBlur: (e: React.ChangeEvent) => void
}

export const Input: FC<InputPropsType> = ({
	field,
	value,
	errorMessage,
	isErrorOccurred,
	handleBlur,
	handleChange
}) => {
	return (
		<div className='input-container'>
			<input
				className={`input-container__input ${
					isErrorOccurred ? 'input-container__input--error' : ''
				}`}
				id={field}
				value={value}
				type={inputsData[field].type}
				placeholder={isErrorOccurred ? '' : inputsData[field].placeholder}
				onChange={handleChange}
				onBlur={handleBlur}
				onInvalid={e => e.preventDefault()}
			/>
			{isErrorOccurred && (
				<>
					<p className='input-container__error-msg'>{errorMessage}</p>
					<img
						className='input-container__icon'
						src='assets/images/icon-error.svg'
						alt='icon-error'
					/>
				</>
			)}
		</div>
	)
}
