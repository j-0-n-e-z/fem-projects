import { Path } from 'react-hook-form'
import { Form } from './validationSchema'

export const inputsData: Record<
	Path<Form>,
	{ placeholder: string; type: string }
> = {
	firstName: {
		placeholder: 'First Name',
		type: 'text',
	},
	lastName: {
		placeholder: 'Last Name',
		type: 'text',
	},
	email: {
		placeholder: 'Email Address',
		type: 'email',
	},
	password: {
		placeholder: 'Password',
		type: 'password',
	},
}
