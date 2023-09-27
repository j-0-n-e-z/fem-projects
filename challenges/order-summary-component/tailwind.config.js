/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				paleBlue: 'hsl(225, 100%, 94%)',
				brightBlue: 'hsl(245, 75%, 52%)',
				veryPaleBlue: 'hsl(225, 100%, 98%)',
				desaturatedBlue: 'hsl(224, 23%, 55%)',
				darkBlue: 'hsl(223, 47%, 23%)'
			},
			backgroundImage: {
				desktop: 'url(./assets/pattern-background-desktop.svg)',
				mobile: 'url(./assets/pattern-background-mobile.svg)'
			},
			fontFamily: {
				RedHatDisplay: ['Red Hat Display', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
