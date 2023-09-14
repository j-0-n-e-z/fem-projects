import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { FC } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { formSteps } from '../data/formStepsData'
import { validationSchema } from '../data/validationSchema'
import { useMultiStep } from '../hooks/useMultiStep'
import { FormItems } from '../types'
import form from './Form.module.scss'
import { FormStep } from './FormStep'
import { Sidebar } from './Sidebar'

const initialValues: FormItems = {
	personalInfo: { name: '', email: '', phone: '' },
	plan: 'arcade',
	period: 'monthly',
	addOns: []
}

export const Panel: FC = () => {
	const methods = useForm<FormItems>({
		defaultValues: initialValues,
		resolver: zodResolver(validationSchema),
		mode: 'onSubmit',
		reValidateMode: 'onChange'
	})
	const { getValues, handleSubmit } = methods

	const onSubmit: SubmitHandler<FormItems> = () => {
		goNext()
		if (isLastStep) {
			console.log(getValues())
		}
	}

	const {
		currentStepIndex,
		goNext,
		goBack,
		direction,
		isFirstStep,
		isLastStep,
		isThankYouStep
	} = useMultiStep(Object.keys(formSteps).length)

	return (
		<FormProvider {...methods}>
			<main className={form.panel}>
				<h1 className={form.hidden}>Multi-step form</h1>
				<Sidebar currentStepIndex={currentStepIndex} />
				<form onSubmit={handleSubmit(onSubmit)} className={form.form}>
					<FormStep {...formSteps[currentStepIndex]} direction={direction} />
					{!isThankYouStep && (
						<div className={form.form__nav}>
							{!isFirstStep && (
								<button
									type='button'
									className={form.form__nav__goBack}
									onClick={goBack}
								>
									Go Back
								</button>
							)}
							<button
								type='submit'
								formNoValidate
								className={cn(form.form__nav__goNext, {
									[form.nav__confirm]: isLastStep
								})}
							>
								{isLastStep ? 'Confirm' : 'Next Step'}
							</button>
						</div>
					)}
				</form>
			</main>
		</FormProvider>
	)
}
