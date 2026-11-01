/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf6e7',
          100: '#f6ecc9',
          200: '#f0dda0',
          300: '#e8c871',
          400: '#dcb24f',
          500: '#c9953a',
          600: '#a87a2c',
          700: '#85601f',
          800: '#5f4417',
          900: '#3d2c10',
        },
        navy: {
          700: '#1c2944',
          800: '#131d33',
          900: '#0c1426',
          950: '#070b15',
        },
        ink: {
          DEFAULT: '#0a0a0c',
          soft: '#121216',
        },
        ivory: '#f5f0e6',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(201, 149, 58, 0.45)',
        card: '0 20px 50px -25px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
