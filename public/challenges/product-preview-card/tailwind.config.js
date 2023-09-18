/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkCyan: 'hsl(158, 36%, 37%)',
				cream: 'hsl(30, 38%, 92%)',
				veryDarkBlue: 'hsl(212, 21%, 14%)',
				darkGrayishBlue: 'hsl(228, 12%, 48%)'
			},
			letterSpacing: {
				widest: '.3rem'
			},
			fontFamily: {
				Fraunces: ['Fraunces', ...defaultTheme.fontFamily.sans],
				Montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
