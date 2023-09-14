/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				lightRed: 'hsl(0, 100%, 67%)',
				orangeyYellow: 'hsl(39, 100%, 56%)',
				greenTeal: 'hsl(166, 100%, 37%)',
				cobaltBlue: 'hsl(234, 85%, 45%)',
				slateBlue: {
					DEFAULT: 'hsl(252, 100%, 67%)',
					light: 'hsl(243, 92%, 76%)'
				},
				lightRoyalBlue: 'hsl(241, 81%, 54%)',
				violetBlue: 'hsla(256, 72%, 46%, 1)',
				persianBlue: 'hsla(241, 72%, 46%, 0)',
				paleBlue: 'hsl(221, 100%, 96%)',
				lightLavender: 'hsl(241, 100%, 89%)',
				darkGrayBlue: 'hsl(224, 30%, 27%)'
			},
			fontFamily: {
				HankenGrotesk: ['Hanken Grotesk', ...defaultTheme.fontFamily.sans]
			},
			backgroundSize: {
				'size-200': '200% 100%'
			},
			backgroundPosition: {
				'pos-static': '0% 0%',
				'pos-hover': '100% 0%'
			},
			backgroundImage: {
				gradient:
					'linear-gradient(to right, hsl(224, 30%, 27%) 50%, hsl(252, 100%, 67%) 50%, hsl(241, 81%, 54%))'
			}
		}
	},
	plugins: []
}
