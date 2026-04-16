/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Override Tailwind's built-in rose → deep dark (all sections night)
        rose: {
          50:  '#1E1C12',
          100: '#252218',
          200: '#2E2A1A',
          300: '#3A3420',
          400: '#4A4228',
          500: '#5A5230',
          600: '#6A6238',
          700: '#7A7240',
          800: '#8A8248',
          900: '#9A9258',
          950: '#AAA268',
        },
        // Dark olive night — section backgrounds
        cream: {
          50:  '#1E1C12',
          100: '#252218',
          200: '#2E2A1A',
        },
        gold: {
          300: '#E8C98A',
          400: '#D4AA5C',
          500: '#C9A15B',
          600: '#B8900A',
          700: '#A07B08',
        },
        sage: {
          300: '#9DB89A',
          400: '#7BA077',
          500: '#5B7A5B',
          600: '#4A6649',
          700: '#3A5239',
        },
        // Deep olive night — dark sections
        plum: {
          950: '#141408',
          900: '#1E1C12',
          800: '#2A2818',
          700: '#383820',
          600: '#4A4A28',
          500: '#6B6B3A',
          400: '#8B8A5A',
          300: '#B0AF7A',
          200: '#CEC99A',
          100: '#E8E6C8',
        },
        // Dark card surfaces
        blush: {
          50:  '#252218',
          100: '#2E2A1A',
          200: '#3A3420',
          300: '#4A4228',
          400: '#5A5030',
          500: '#6A6038',
        },
        // Olive/moss — main accent color (buttons, highlights, icons)
        mauve: {
          300: '#C4C08C',
          400: '#9A9860',
          500: '#6B6B3A',
          600: '#525230',
        },
        // Stone — inverted to warm light tones for dark backgrounds
        stone: {
          300: '#786848',
          400: '#9A8850',
          500: '#B0966A',
          600: '#C4AA78',
          700: '#D8BE8A',
          800: '#EAD8A8',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Cormorant Garamond — ethereal, ancient, ritualistic
        ritual: ['Cormorant Garamond', 'Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      }
    },
  },
  plugins: [],
}
