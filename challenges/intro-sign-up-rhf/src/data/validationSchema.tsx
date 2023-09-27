import { z } from 'zod'

export type Form = z.infer<typeof validationSchema>

export const validationSchema = z.object({
	firstName: z
		.string()
		.min(1, 'First Name cannot be empty')
		.min(3, 'First Name must be at least 3 characters')
		.max(20, 'First Name cannot be longer than 20 characters'),
	lastName: z
		.string()
		.min(1, 'Last Name cannot be empty')
		.min(3, 'Last Name must be at least 3 characters')
		.max(20, 'Last Name cannot be longer than 20 characters'),
	email: z
		.string()
		.min(1, 'Email cannot be empty')
		.email('Looks like this is not an email')
		.max(30, 'Email cannot be longer than 30 characters'),
	password: z
		.string()
		.min(1, 'Password cannot be empty')
		.min(8, 'Password must be at least 8 characters')
		.max(20, 'Password cannot be longer than 20 characters')
		.regex(/^[A-Z]/, 'Password must begin with a capital letter')
		.regex(/(?=.*\d)/, 'Password must contain digits')
		.regex(/(?=.*[A-Za-z])/, 'Password must contain letters')
		.regex(
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
			'Password must contain letters and digits only'
		),
})
