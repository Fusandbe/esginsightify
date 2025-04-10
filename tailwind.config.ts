
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
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'sans': ['Montserrat', 'sans-serif'],
			},
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
				// Custom ESG colors
				esg: {
					green: {
						50: '#f0fdf4',
						100: '#dcfce7',
						200: '#bbf7d0',
						300: '#86efac',
						400: '#4ade80',
						500: '#22c55e',
						600: '#16a34a',
						700: '#15803d',
						800: '#166534',
						900: '#14532d',
					},
					blue: {
						50: '#eff6ff',
						100: '#dbeafe',
						200: '#bfdbfe',
						300: '#93c5fd',
						400: '#60a5fa',
						500: '#3b82f6',
						600: '#2563eb',
						700: '#1d4ed8',
						800: '#1e40af',
						900: '#1e3a8a',
					},
					amber: {
						50: '#fffbeb',
						100: '#fef3c7',
						200: '#fde68a',
						300: '#fcd34d',
						400: '#fbbf24',
						500: '#f59e0b',
						600: '#d97706',
						700: '#b45309',
						800: '#92400e',
						900: '#78350f',
					},
					red: {
						50: '#fef2f2',
						100: '#fee2e2',
						200: '#fecaca',
						300: '#fca5a5',
						400: '#f87171',
						500: '#ef4444',
						600: '#dc2626',
						700: '#b91c1c',
						800: '#991b1b',
						900: '#7f1d1d',
					},
					// Adding French luxury colors
					gold: {
						50: '#fdf9e9',
						100: '#fbf2d3',
						200: '#f7e5a7',
						300: '#f3d97a',
						400: '#efcc4e',
						500: '#ebc022',
						600: '#bc9a1b',
						700: '#8d7314',
						800: '#5e4d0e',
						900: '#2f2607',
					},
					navy: {
						50: '#e9f0f7',
						100: '#d3e1f0',
						200: '#a7c3e0',
						300: '#7aa6d1',
						400: '#4e88c1',
						500: '#226ab2',
						600: '#1b558e',
						700: '#14406b',
						800: '#0e2b47',
						900: '#071524',
					},
					burgundy: {
						50: '#f7e9ee',
						100: '#f0d3dd',
						200: '#e0a7bc',
						300: '#d17a9a',
						400: '#c14e79',
						500: '#b22257',
						600: '#8e1b46',
						700: '#6b1434',
						800: '#470e23',
						900: '#240711',
					},
				},
			},
			boxShadow: {
				glow: '0 0 10px 2px rgba(44, 60, 115, 0.3), 0 0 20px rgba(44, 60, 115, 0.15), 0 0 30px rgba(44, 60, 115, 0.05)',
				'glow-gold': '0 0 10px 2px rgba(220, 185, 26, 0.3), 0 0 20px rgba(220, 185, 26, 0.15), 0 0 30px rgba(220, 185, 26, 0.05)',
				'glow-burgundy': '0 0 10px 2px rgba(178, 34, 87, 0.3), 0 0 20px rgba(178, 34, 87, 0.15), 0 0 30px rgba(178, 34, 87, 0.05)',
				premium: '0px 2px 15px rgba(0, 0, 0, 0.05), 0px 15px 35px -5px rgba(0, 0, 0, 0.1)',
				luxury: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '0.85' },
					'50%': { opacity: '0.4' }
				},
				'glow-pulse': {
					'0%': { boxShadow: '0 0 10px 2px rgba(44, 60, 115, 0.3), 0 0 20px rgba(44, 60, 115, 0.15), 0 0 30px rgba(44, 60, 115, 0.05)' },
					'50%': { boxShadow: '0 0 15px 5px rgba(44, 60, 115, 0.4), 0 0 30px rgba(44, 60, 115, 0.2), 0 0 40px rgba(44, 60, 115, 0.1)' },
					'100%': { boxShadow: '0 0 10px 2px rgba(44, 60, 115, 0.3), 0 0 20px rgba(44, 60, 115, 0.15), 0 0 30px rgba(44, 60, 115, 0.05)' }
				},
				'glow-pulse-gold': {
					'0%': { boxShadow: '0 0 10px 2px rgba(220, 185, 26, 0.3), 0 0 20px rgba(220, 185, 26, 0.15), 0 0 30px rgba(220, 185, 26, 0.05)' },
					'50%': { boxShadow: '0 0 15px 5px rgba(220, 185, 26, 0.4), 0 0 30px rgba(220, 185, 26, 0.2), 0 0 40px rgba(220, 185, 26, 0.1)' },
					'100%': { boxShadow: '0 0 10px 2px rgba(220, 185, 26, 0.3), 0 0 20px rgba(220, 185, 26, 0.15), 0 0 30px rgba(220, 185, 26, 0.05)' }
				},
				'gradient-flow': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
				'glow-pulse-gold': 'glow-pulse-gold 3s infinite ease-in-out',
				'gradient-flow': 'gradient-flow 8s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
