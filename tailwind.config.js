module.exports = {
	content: ["./views/**/*.{html,js,ejs}"],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				brightenRed: "hsl(12, 88%, 59%)",
				brightenRedLight: "hsl(12, 88%, 69%)",
				brightenRedSupLight: "hsl(12, 88%, 95%)",
				darkBlue: "hsl(233, 12%, 13%)",
				darkGreyishBlue: "hsl(277, 12%, 13%)",
				veryPaleRed: "hsl(13, 100%, 96%)",
				veryLightGray: "hsl(0, 0, 98%)",

				textColorP: "#818181",
				primary: "#f5be47",
				secondary: "#0a183a",
				textBg: "#000",
				textColorDark: "white",
				secondaryLowOpacity: "#0a183aa3",
				primaryLowOpacity: "#f5be47a3",
			},
		},
	},
	plugins: [],
};
