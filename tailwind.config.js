/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          dark: '#061829',
          light: '#0D3152',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#C8A045',
          light: '#E0C35D',
        },
        gray: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#6B7280',
          500: '#9CA3AF',
          400: '#D1D5DB',
          300: '#E5E7EB',
          200: '#F3F4F6',
          100: '#F9FAFB',
          50: '#F5F7FA',
        },
        light: {
          DEFAULT: '#F5F7FA',
          warm: '#F9F8F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'corporate': '12px',
        'corporate-lg': '16px',
      },
      boxShadow: {
        'corporate': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'corporate-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'corporate-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
