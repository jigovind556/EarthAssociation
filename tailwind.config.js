/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
				bebas: ["Bebas Neue", "sans-serif"],
			},
			colors: {
				pgreen: "#8DC73F",
			},
			screens: {
				tab: "766px",
				laptop: "1440px",
			},
			backgroundImage: {
				hero: "url('./src/assets/hero.jpeg')",
			},
		},
	},
	plugins: [],
}
