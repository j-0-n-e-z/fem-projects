/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				lightGray: 'hsl(212, 45%, 89%)',
				grayishBlue: 'hsl(220, 15%, 55%)',
				darkBlue: 'hsl(218, 44%, 22%)'
			},
			fontFamily: {
				Outfit: ['Outfit', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
