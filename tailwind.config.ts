import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		boxShadow: {
			'card': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
		  },
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			"dm-sans": ['DM Sans', 'sans-serif'],
		},
		animation: {
			fromAbove: "intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[-25%]",
			fromRight: "intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[10rem]",
			fromLeft: "intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[-10rem]",
		},
  		colors: {
			Customs: {
				Primary: "hsl(240, 100%, 7.8%)",
				backgroundEclipse: "hsl(210, 75%, 35%)",
				// Card: "hsl(0, 0%, 10%)",
				Card: "hsl(224, 35%, 20%)",
				aboutButtons: " 	hsl(219, 73%, 61%)",
				projectTools: "hsl(37, 72%, 54%)",
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('tailwindcss-motion'), require('tailwindcss-intersect')],
} satisfies Config;
