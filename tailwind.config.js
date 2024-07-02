module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  variants: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
