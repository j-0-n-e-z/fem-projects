/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['index.html', 'src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-red': 'hsl(0, 100%, 74%)',
				'light-green': 'hsl(154, 59%, 51%)',
				'light-purple': 'hsl(248, 32%, 49%)',
				'dark-blue': 'hsl(249, 10%, 26%)',
				'grayish-blue': 'hsl(246, 25%, 77%)'
			},
			backgroundImage: {
				desktop: 'url(./images/bg-intro-desktop.png)',
				mobile: 'url(./images/bg-intro-mobile.png)'
			},
			boxShadow: {
				grayishBlue: '0 8px 0 0 #3e3c493f',
				grayishBlueInset: 'inset 0 -4px 0 0 #3e3c493f'
			},
			fontFamily: {
				Poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
