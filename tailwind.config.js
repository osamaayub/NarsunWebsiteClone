/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  },
	  extend: {
		height:{
			'64':'13rem'
			
		},
		width:{
			'full':'88%'
		},
		colors:{
			'gray':'#030712'
		},
		spacing:{
			'20': '5rem',
		},
	  },
	},
	plugins: [],
  }