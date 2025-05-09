/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['var(--font-plus-jakarta)', 'sans-serif'],
    },
    fontSize: {
      sm: ['0.875rem', { lineHeight: '1.25rem' }],     
      base: ['1rem', { lineHeight: '1.5rem' }],         
      md: ['1.125rem', { lineHeight: '1.625rem' }],    
      lg: ['1.25rem', { lineHeight: '1.75rem' }],       
      xl: ['1.5rem', { lineHeight: '2rem' }],         
      '2xl': ['2rem', { lineHeight: '2.5rem' }],      
      '3xl': ['3rem', { lineHeight: '3.5rem' }],        
      '4xl': ['4rem', { lineHeight: '4.5rem' }],       
    },
    colors: {
        blue:'#6246EA',
        black:'#2B2C34',
        lightGrey :'#E4E5E9',
        grey:'#C0C0C0',
        darkGrey:'#2D3748',
        white: '#FFFFFE',
        text: {
          dark: '#111827',
          muted:'#6B7280',
        },
        border:'#E5E7EB',
        accent:'#10B981',
    },
    extend: {},
  },
}