module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'moon-pic': "https://images.pexels.com/photos/7766717/pexels-photo-7766717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }),
    },
  },
  variants: {
    extend: {},
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
