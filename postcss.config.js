exports = {
	plugins: {
		"autoprefixer": {},
		"postcss-font-magician": {},
		"postcss-nested": {},
		"postcss-sassy-mixins": {},
		"postcss-simple-vars": {},
		"postcss-define-function": {},
		"postcss-uncss": {
			html: ['index.html']
		},
		// uncss is powerful for unused css
	}
}