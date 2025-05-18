/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // Indigo
          light: '#818CF8',
          dark: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald
          light: '#34D399',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber
          light: '#FBBF24',
          dark: '#D97706',
        },
        dark: {
          DEFAULT: '#1F2937',
          lighter: '#374151',
          lightest: '#4B5563',
        },
        light: {
          DEFAULT: '#F9FAFB',
          darker: '#F3F4F6',
          darkest: '#E5E7EB',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}; 
 