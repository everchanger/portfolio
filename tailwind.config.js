module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Zen Kaku Gothic New'],
    },
    container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
  plugins: []
}
