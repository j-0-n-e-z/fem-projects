/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				veryDarkMagenta: 'hsl(300, 43%, 22%)',
				softPink: 'hsl(333, 80%, 67%)',
				darkGrayishMagenta: 'hsl(303, 10%, 53%)',
				lightGrayishMagenta: 'hsl(300, 24%, 96%)'
			},
			backgroundImage: {
				patternBackground:
					'url(./assets/images/bg-pattern-top-desktop.svg), url(./assets/images/bg-pattern-bottom-desktop.svg)'
			},
			backgroundPosition: {
				patternBackgroundPosition: '0 0, bottom right'
			}
		}
	},
	plugins: []
}
