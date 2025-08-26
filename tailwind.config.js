/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New elegant palette
        'space-cadet': '#22223b',
        'ultra-violet': '#4a4e69',
        'rose-quartz': '#9a8c98',
        'pale-dogwood': '#c9ada7',
        'isabelline': '#f2e9e4',
        
        // Theme-aware mappings
        primary: {
          50: '#f2e9e4',
          100: '#c9ada7',
          200: '#9a8c98',
          300: '#4a4e69',
          400: '#22223b',
          500: '#22223b',
          600: '#1a1b2f',
          700: '#131424',
          800: '#0d0e19',
          900: '#06070e',
        },
        
        // E-commerce specific colors
        price: {
          light: '#22223b',
          dark: '#f2e9e4',
        },
        
        discount: '#dc3545',
        
        // Button colors
        'btn-primary': {
          light: '#4a4e69',
          dark: '#c9ada7',
        },
        
        // Wishlist accent
        wishlist: '#9a8c98',
      },
      
      backgroundColor: {
        'theme-bg': 'var(--background)',
        'theme-card': 'var(--ultra-violet)',
        'theme-card-light': '#ffffff',
        'theme-card-subtle': 'var(--pale-dogwood)',
      },
      
      textColor: {
        'theme-primary': 'var(--foreground)',
        'theme-secondary': 'var(--ultra-violet)',
        'theme-accent': 'var(--rose-quartz)',
      },
      
      borderColor: {
        'theme-border': 'var(--rose-quartz)',
        'theme-border-light': 'var(--pale-dogwood)',
      },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
}
