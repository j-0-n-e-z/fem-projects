import * as Yup from 'yup'

export const validationSchema = Yup.object({
	firstName: Yup.string()
		.required('First Name cannot be empty')
		.max(20, 'First Name cannot be longer than 20 characters')
		.min(3, 'First Name must be at least 3 characters'),
	lastName: Yup.string()
		.required('Last Name cannot be empty')
		.max(20, 'Last Name cannot be longer than 20 characters')
		.min(3, 'Last Name must be at least 3 characters'),
	email: Yup.string()
		.required('Email cannot be empty')
		.email('Looks like this is not an email')
		.max(30, 'Email cannot be longer than 30 characters'),
	password: Yup.string()
		.required('Password cannot be empty')
		.max(20, 'Password cannot be longer than 20 characters')
		.min(8, 'Password must be at least 8 characters')
		.matches(/^[A-Z]/, 'Password must begin with a capital letter')
		.matches(/(?=.*\d)/, 'Password must contain digits')
		.matches(/(?=.*[A-Za-z])/, 'Password must contain letters')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
			'Password must contain letters and digits only'
		)
})
