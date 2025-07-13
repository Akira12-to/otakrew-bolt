import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// OTAKREW Charte Graphique - Inspirée d'ADN avec identité camerounaise
				otaku: {
					// Noirs profonds - Base ADN
					dark: 'hsl(240 6% 4%)',
					darker: 'hsl(240 8% 2%)',
					'dark-soft': 'hsl(240 5% 8%)',
					
					// Grises - Neutres
					gray: 'hsl(240 4% 10%)',
					'gray-light': 'hsl(240 4% 16%)',
					'gray-medium': 'hsl(240 3% 22%)',
					'gray-soft': 'hsl(240 2% 28%)',
					
					// Orange - Couleur signature ADN
					orange: 'hsl(16 100% 60%)',
					'orange-light': 'hsl(16 100% 70%)',
					'orange-dark': 'hsl(16 90% 50%)',
					'orange-muted': 'hsl(16 80% 40%)',
					
					// Identité camerounaise - Couleurs nationales
					green: 'hsl(120 60% 35%)',      
					'green-light': 'hsl(120 50% 45%)',
					yellow: 'hsl(45 95% 55%)',       
					'yellow-light': 'hsl(45 90% 65%)',
					red: 'hsl(0 80% 55%)',          
					'red-light': 'hsl(0 70% 65%)',
					
					// Or - Accent premium
					gold: 'hsl(45 100% 50%)',
					'gold-light': 'hsl(45 95% 60%)',
					'gold-dark': 'hsl(45 85% 40%)',
					
					// Couleurs fonctionnelles
					success: 'hsl(120 60% 50%)',
					warning: 'hsl(45 95% 55%)',
					error: 'hsl(0 80% 55%)',
					info: 'hsl(210 100% 60%)',
				}
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'system-ui', 'sans-serif'],
				'rubik': ['Rubik', 'system-ui', 'sans-serif'],
				'sans': ['Montserrat', 'system-ui', 'sans-serif'],
				'heading': ['Rubik', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'hero': ['4rem', { lineHeight: '1.1', fontWeight: '800' }],        
				'title': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],       
				'subtitle': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }], 
				'heading': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }], 
				'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
				'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], 
				'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],        
				'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], 
				'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],  
			},
			spacing: {
				'xs': '0.25rem',    
				'sm': '0.5rem',     
				'md': '1rem',       
				'lg': '1.5rem',     
				'xl': '2rem',       
				'2xl': '3rem',      
				'3xl': '4rem',      
				'4xl': '6rem',      
				'5xl': '8rem',      
			},
			borderRadius: {
				'xs': '0.25rem',    
				'sm': '0.5rem',     
				'md': '0.75rem',    
				'lg': '1rem',       
				'xl': '1.5rem',     
				'2xl': '2rem',      
				'full': '9999px',
			},
			boxShadow: {
				'otaku-sm': '0 2px 8px hsl(16 100% 60% / 0.1)',
				'otaku-md': '0 4px 16px hsl(16 100% 60% / 0.15)',
				'otaku-lg': '0 8px 32px hsl(16 100% 60% / 0.2)',
				'otaku-xl': '0 16px 64px hsl(16 100% 60% / 0.25)',
				'otaku-glow': '0 0 20px hsl(16 100% 60% / 0.4)',
				'otaku-glow-intense': '0 0 40px hsl(16 100% 60% / 0.6)',
				'otaku-halo-sm': '0 0 8px hsl(16 100% 60% / 0.3), 0 2px 8px hsl(16 100% 60% / 0.1)',
				'otaku-halo-md': '0 0 16px hsl(16 100% 60% / 0.4), 0 4px 16px hsl(16 100% 60% / 0.15)',
				'otaku-halo-lg': '0 0 32px hsl(16 100% 60% / 0.5), 0 8px 32px hsl(16 100% 60% / 0.2)',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(16 100% 60% / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(16 100% 60% / 0.6)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' }
				},
				'zoom-out': {
					'0%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'skeleton-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'slide-up-fade': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down-fade': {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-down': 'slide-down 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'zoom-in': 'zoom-in 0.3s ease-out forwards',
				'zoom-out': 'zoom-out 0.3s ease-out forwards',
				'bounce-subtle': 'bounce-subtle 0.6s ease-in-out',
				'rotate-slow': 'rotate-slow 3s linear infinite',
				'skeleton-pulse': 'skeleton-pulse 1.5s ease-in-out infinite',
				'slide-up-fade': 'slide-up-fade 0.4s ease-out',
				'slide-down-fade': 'slide-down-fade 0.4s ease-out',
				'hover-zoom': 'zoom-in 0.3s ease-out',
				'hover-float': 'bounce-subtle 0.6s ease-in-out infinite',
				'hover-glow': 'glow-pulse 1.5s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-otaku': 'linear-gradient(135deg, hsl(16 100% 60%) 0%, hsl(45 100% 50%) 100%)',
				'gradient-otaku-soft': 'linear-gradient(135deg, hsl(16 80% 50%) 0%, hsl(45 80% 45%) 100%)',
				'gradient-cameroon': 'linear-gradient(135deg, hsl(120 60% 35%) 0%, hsl(45 95% 55%) 50%, hsl(0 80% 55%) 100%)',
				'gradient-dark': 'linear-gradient(135deg, hsl(240 6% 4%) 0%, hsl(240 4% 10%) 100%)',
				'gradient-hero': 'linear-gradient(135deg, hsl(240 6% 4%) 0%, hsl(240 4% 10%) 50%, hsl(16 100% 60% / 0.1) 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, transparent, hsl(16 100% 60% / 0.1), transparent)',
			},
			gridTemplateColumns: {
				'desktop': 'repeat(12, 1fr)',
				'tablet': 'repeat(8, 1fr)',
				'mobile': 'repeat(6, 1fr)',
			},
			transitionDuration: {
				'250': '250ms',
				'350': '350ms',
				'400': '400ms',
				'600': '600ms',
			},
			transitionTimingFunction: {
				'ease-out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
				'ease-in-cubic': 'cubic-bezier(0.32, 0, 0.67, 0)',
				'ease-in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
