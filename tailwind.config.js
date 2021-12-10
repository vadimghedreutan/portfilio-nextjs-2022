module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				'3xl': '1920px',
				'2xs': { max: '640px' },
				xs: { max: '568px' },
				'3xs': { max: '375px' },
			},
			fontFamily: {
				Oswald: ["'Oswald'", 'sans-serif'],
			},
			animation: {
				blob: 'blob 8s infinite',
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'scale(1)',
					},
					'33%': {
						transform: 'scale(1.1)',
					},
					'66%': {
						transform: 'scale(0.9)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide')],
}
