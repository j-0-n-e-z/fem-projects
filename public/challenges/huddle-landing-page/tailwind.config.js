/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				violet: 'hsl(257, 40%, 49%)',
				softMagenta: 'hsl(300, 69%, 71%)'
			},
			backgroundImage: {
				desktop: 'url(./assets/images/bg-desktop.svg)',
				mobile: 'url(./assets/images/bg-mobile.svg)'
			},
			backgroundPosition: {
				desktopPos: '-60px 0'
			},
			fontFamily: {
				Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
				OpenSans: ['Open Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
