/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				purple: 'hsl(259, 100%, 65%)',
				'light-red': 'hsl(0, 100%, 67%)',
				'off-white': 'hsl(0, 0%, 94%)',
				'light-grey': 'hsl(0, 0%, 86%)',
				'smokey-grey': 'hsl(0, 1%, 44%)',
				'off-black': 'hsl(0, 0%, 8%)'
			},
			fontSize: {
				input: 32
			},
			fontFamily: {
				Poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
