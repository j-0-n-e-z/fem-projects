/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				softBlue: 'hsl(215, 51%, 70%)',
				cyan: 'hsl(178, 100%, 50%)',
				main: 'hsl(217, 54%, 11%)',
				card: 'hsl(216, 50%, 16%)',
				line: 'hsl(215, 32%, 27%)'
			},
			fontFamily: {
				Outfit: ['Outfit', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				base: '15px'
			}
		}
	},
	plugins: []
}
