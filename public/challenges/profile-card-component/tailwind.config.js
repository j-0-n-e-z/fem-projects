/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				veryDarkDesaturatedBlue: 'hsl(229, 23%, 23%)',
				darkCyan: 'hsl(185, 75%, 39%)',
				darkGrayishBlue: 'hsl(227, 10%, 46%)',
				darkGray: 'hsl(0, 0%, 59%)'
			},
			fontSize: {
				base: '18px'
			},
			fontFamily: {
				KumbhSans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans]
			},
			backgroundImage: {
				patternBackground:
					'url(./assets/bg-pattern-top.svg), url(./assets/bg-pattern-bottom.svg)',
				patternCard: 'url(./assets/bg-pattern-card.svg)'
			},
			backgroundPosition: {
				patternBackgroundDesktopPosition:
					'calc(100% - 52vw) calc(100% - 35vh), 48vw 52vh',
				patternBackgroundMobilePosition:
					'calc(100% - 40vw) calc(100% - 45vh), 40vw 40vh',
				patternCardMobilePosition: '-12px 0'
			}
		}
	},
	plugins: []
}
