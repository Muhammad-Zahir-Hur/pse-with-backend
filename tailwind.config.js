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
				"text-color-p": "#818181",
				primary: "#f5be47",
				secondary: "#0a183a",
				"text-bg": "#000",
				"text-color-dark": "white",
				"secondary-low-opacity": "#0a183aa3",
				"primary-low-opacity": "#f5be47a3",
			},
		},
	},
	plugins: [],
};
