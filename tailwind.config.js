/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['index.html', './src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				Nunito: ['Nunito', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
