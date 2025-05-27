/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: '#2563EB', // blue-600
          hover: '#1D4ED8', // blue-700
          light: '#DBEAFE', // blue-100
        },
        
        // Neutral colors
        background: '#FFFFFF', // white
        surface: '#F9FAFB', // gray-50
        border: '#E5E7EB', // gray-200
        text: {
          primary: '#111827', // gray-900
          secondary: '#4B5563', // gray-600
          tertiary: '#9CA3AF', // gray-400
        },
        
        // Semantic colors
        success: '#16A34A', // green-600
        error: '#DC2626', // red-600
        warning: '#F59E0B', // amber-500
        info: '#0EA5E9', // sky-500
        
        // Brand colors
        brand: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '500': '#0ea5e9',
          '600': '#2563eb',
          '700': '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        brand: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1rem' }],
        'sm': ['14px', { lineHeight: '1.25rem' }],
        'base': ['16px', { lineHeight: '1.5rem' }],
        'lg': ['18px', { lineHeight: '1.75rem' }],
        'xl': ['20px', { lineHeight: '1.75rem' }],
        '2xl': ['24px', { lineHeight: '2rem' }],
        '3xl': ['30px', { lineHeight: '2.25rem' }],
        '4xl': ['36px', { lineHeight: '2.5rem' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}