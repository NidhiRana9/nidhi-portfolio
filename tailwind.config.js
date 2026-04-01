/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: '#0A0A0B', // Deep obsidian black
        card: '#121214', // Subtle elevated component
        border: '#1F1F22', // Sleek dark border
        'border-hover': '#2E2E32',
        
        'text-main': '#FFFFFF',
        'text-sec': '#A1A1AA', // Zinc-400 equivalent for softer read
        
        accent: {
          main: '#06B6D4', // Premium cyan
          glow: 'rgba(6, 182, 212, 0.15)'
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #1F1F22 1px, transparent 1px), linear-gradient(to bottom, #1F1F22 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow-pulse 3s alternate infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { opacity: 0.5, transform: 'scale(1)' },
          '100%': { opacity: 1, transform: 'scale(1.05)' }
        }
      }
    },
  },
  plugins: [],
}
