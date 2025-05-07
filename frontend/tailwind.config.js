/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
    fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      fontSize: {
     heading1: ['4rem', { lineHeight: '4.5rem' }],     
     subheading1: ['1.5rem', { lineHeight: '2rem' }],  
     subheading2: ['1.25rem', { lineHeight: '1.75rem' }],
     paragraph1: ['1.25rem', { lineHeight: '1.75rem' }],
     paragraph2: ['1.125rem', { lineHeight: '1.625rem' }], 
     paragraph3: ['1rem', { lineHeight: '1.5rem' }],  
     paragraph4: ['0.875rem', { lineHeight: '1.25rem' }],
      },
    },
  },

}

