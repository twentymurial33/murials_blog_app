/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
    fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      fontSize: {
        heading1: ['64px', { lineHeight: '72px' }],
        subheading1: ['24px', { lineHeight: '32px' }],
        subheading2: ['20px', { lineHeight: '28px' }],
        paragraph1: ['20px', { lineHeight: '28px' }],
        paragraph2: ['18px', { lineHeight: '26px' }],
        paragraph3: ['16px', { lineHeight: '24px' }],
        paragraph4: ['14px', { lineHeight: '20px' }],
      },
        fontWeight: {
        semibold: 600,
      },
    },
  },
  plugins: `[require('@tailwindcss/typography')],`
}

