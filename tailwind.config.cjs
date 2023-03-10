/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				vinay: '#13BBBB',
				kumar: '#FFBE16',
				uiux: '#4769E2',
				design: '#F547D9',
				'partner-gray': '#E0E0E0'
			},
			fontFamily: {
				Inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};
