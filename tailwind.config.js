/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['index.html', './src/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				Mooli: ['Mooli', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
