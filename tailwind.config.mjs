/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				marcellus: ['"Marcellus"', 'sans-serif'],
				grandslang: ['"Grand Slang"', 'sans-serif'],
			},
			colors: {
				main: '#262626',
				secondary: '#d9d6c7',
				tertiary: '#f2dad8',
				secondaryd: '#a69286',
				tertiaryd: '#bf9793',
			},
		},
	},
	plugins: [],
};
