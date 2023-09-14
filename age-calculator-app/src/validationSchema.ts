import * as z from 'zod'

export type Fields = z.infer<typeof validationSchema>

export const validationSchema = z
	.object({
		day: z
			.string()
			.min(1, 'This field is required')
			.transform(Number)
			.refine(n => n >= 1 && n <= 31, 'Must be a valid day'),
		month: z
			.string()
			.min(1, 'This field is required')
			.transform(Number)
			.refine(n => n >= 1 && n <= 12, 'Must be a valid month'),
		year: z
			.string()
			.min(1, 'This field is required')
			.transform(Number)
			.refine(n => n >= 0, 'Must be a valid year')
	})
	.refine(
		data => {
			const inputDate = new Date(data.year, data.month - 1, data.day)
			return (
				inputDate.getFullYear() === data.year &&
				inputDate.getMonth() === data.month - 1 &&
				inputDate.getDate() === data.day
			)
		},
		{
			message: 'Must be a valid date',
			path: ['day']
		}
	)
	.refine(data => new Date(data.year, data.month - 1, data.day) < new Date(), {
		message: 'Must be in the past',
		path: ['year']
	})
