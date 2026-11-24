/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF6F0',
          200: '#F5EFEB',
          300: '#EFE6DE',
          400: '#E6DACF',
        },
        beige: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#EFE9E1',
          300: '#E3D9CD',
        },
        rose: {
          50: '#FDF5F6',
          100: '#F9EDEE',
          200: '#F2D8DC',
          300: '#E8B4BC',
          400: '#D48B97',
          500: '#C2707E',
          600: '#A95462',
        },
        plum: {
          500: '#7B2740',
          600: '#641C31',
          700: '#521426',
          800: '#420D1D',
          900: '#320714',
          950: '#23040D',
        },
        gold: {
          100: '#F8F2E2',
          200: '#EBD39E',
          300: '#DFBE76',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A78443',
        },
        charcoal: {
          700: '#4A4347',
          800: '#342F32',
          900: '#211D20',
          950: '#151214',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(82, 20, 38, 0.05)',
        'card': '0 10px 30px -4px rgba(82, 20, 38, 0.07)',
        'hover': '0 20px 40px -6px rgba(82, 20, 38, 0.12)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
      }
    },
  },
  plugins: [],
}
