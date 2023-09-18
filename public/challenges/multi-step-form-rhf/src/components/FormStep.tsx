import { motion } from 'framer-motion'
import { FC } from 'react'
import { FormStep as IFormStep } from '../types'
import form from './Form.module.scss'

type FormStepProps = IFormStep & { direction: number }

export const FormStep: FC<FormStepProps> = ({
	title,
	description,
	component,
	direction
}) => {
	return (
		<motion.section
			key={title}
			initial={{
				x: direction * 100,
				opacity: 0
			}}
			animate={{
				x: 0,
				opacity: 1
			}}
			transition={{ duration: 0.3, delay: 0.1 }}
			className={form['form__step-content']}
		>
			{title && <h2 className={form['form__step-content__title']}>{title}</h2>}
			{description && (
				<p className={form['form__step-content__description']}>{description}</p>
			)}
			{component}
		</motion.section>
	)
}
