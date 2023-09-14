/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				desaturatedRed: 'hsl(0, 36%, 70%)',
				softRed: 'hsl(0, 93%, 68%)',
				lightPink: 'hsl(0,80%,86%)',
				darkPink: 'hsl(0,74%,74%)',
				darkGrayishRed: 'hsl(0, 6%, 24%)'
			},
			backgroundImage: {
				gradientWhite:
					'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
				pattern: 'url(/assets/images/bg-pattern-desktop.svg)'
			},
			backgroundSize: {
				'size-200': '200% 200%'
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%'
			},
			boxShadow: {
				buttonDesktop: '0 10px 25px 0 hsl(0, 36%, 70%)',
				buttonMobile: '0 7px 10px 0 hsl(0, 36%, 70%)'
			},
			fontFamily: {
				JosefinSans: ['Josefin Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
}
