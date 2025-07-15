import { FC } from 'react'
import { inputsData } from './data/inputsData'
import { FieldError, Path, UseFormRegister } from 'react-hook-form'
import { Form } from './data/validationSchema'

type InputPropsType = {
	label: Path<Form>
	error: FieldError | undefined
	register: UseFormRegister<Form>
}

export const Input: FC<InputPropsType> = ({ label, error, register }) => {
	return (
		<div className='input-container'>
			<input
				className={`input-container__input ${
					error ? 'input-container__input--error' : ''
				}`}
				id={label}
				type={inputsData[label].type}
				placeholder={error ? '' : inputsData[label].placeholder}
				{...register(label)}
				onInvalid={e => e.preventDefault()}
				aria-invalid={error ? true : false}
			/>
			{error && (
				<>
					<p className='input-container__error-msg'>{error.message}</p>
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
