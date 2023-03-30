/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "660px",
				md: "768px",
				lg: "1024px",
				xl: "1440px",
				"2xl": "1660px",
				"3xl": "1920px",
				"4xl": "2220px",
			},
			colors: {
				blue: "#1B004E",
				red: "#EB5757",
			},
		},
	},
	plugins: [],
};
