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
				"text-color-light-mood-p": "#818181",
				primary: "#f5be47",
				secondary: "#0a183a",
				"text-bg": "#000",
				"text-color-dark-mood": "white",
				"secondary-light": "#747987",
				"primary-light": "#baa982",
			},
		},
	},
	plugins: [],
};
