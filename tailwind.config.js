/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-surface': '#1A1A1A',
        'cyan': {
          400: '#22D3EE',
          500: '#0EA5E9',
          600: '#0284C7',
        },
        'violet': {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        'zinc': {
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '8rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float-tech': 'float-tech 6s ease-in-out infinite',
        'float-tech-delayed': 'float-tech-delayed 7s ease-in-out infinite 1s',
        'float-tech-slow': 'float-tech-slow 8s ease-in-out infinite 0.5s',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}