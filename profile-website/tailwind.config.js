/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          violet: '#8b5cf6',
          indigo: '#6366f1',
          blue: '#3b82f6',
          cyan: '#22d3ee',
        },
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%,-6%,0) scale(1.1)' },
          '66%': { transform: 'translate3d(-4%,4%,0) scale(0.95)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        'spin-slow': 'spinSlow 12s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
      },
    },
  },
  plugins: [],
}
