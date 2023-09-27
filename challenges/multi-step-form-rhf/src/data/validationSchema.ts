import { z } from 'zod'

export const validationSchema = z.object({
	personalInfo: z.object({
		name: z
			.string()
			.min(1, 'This field is required')
			.max(30, 'Name cannot be longer 30 characters'),
		email: z
			.string()
			.min(1, 'This field is required')
			.max(30, 'Email cannot be longer than 30 characters')
			.email('Invalid email address'),
		phone: z
			.string()
			.min(1, 'This field is required')
			.regex(
				/^\+?\d\s?(\(\d{3}\)|\d{3})\s?\d{3}[\s\-]?\d{3,4}$/,
				'Invalid phone number'
			)
	})
})
