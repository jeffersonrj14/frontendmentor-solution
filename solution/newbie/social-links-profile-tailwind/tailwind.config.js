/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
    },
      colors: {
				// Light colors
				'primary-light': 'hsl(0, 0%, 100%)', 
				'secondary-light': 'hsl(75, 94%, 57%)',

				// Dark colors
				'primary-dark': 'hsl(0, 0%, 8%)',
				'secondary-dark': 'hsl(0, 0%, 12%)',
				'tertiary-dark': 'hsl(0, 0%, 20%)', 
			},
    },
  },
  plugins: [],
}