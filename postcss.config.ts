export default {
  plugins: {
    'tailwindcss': {},
    // autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 75, // Match with rem.ts BASE_FONT_SIZE
      propList: ['*'], // Properties to convert
      selectorBlackList: [], // Selectors to ignore
      replace: true,
      mediaQuery: false, // Whether to convert in media queries
      minPixelValue: 1, // Don't convert values <= 1px
      exclude: /node_modules/i // Exclude node_modules
    }
  }
}