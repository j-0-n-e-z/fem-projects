/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				veryDarkBlue: 'hsl(233, 47%, 7%)',
				veryDesaturatedBlue: 'hsl(244, 38%, 16%)',
				softViolet: 'hsl(277, 64%, 61%)',
				mainParagraph: 'hsla(0, 0%, 100%, 0.75)',
				statHeadings: 'hsla(0, 0%, 100%, 0.6)'
			},
			backgroundImage: {
				desktop: "url('./assets/image-header-desktop.jpg')",
				mobile: "url('./assets/image-header-mobile.jpg')"
			},
			fontSize: {
				base: '15px'
			}
		}
	},
	plugins: []
}
