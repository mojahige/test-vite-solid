module.exports = (api) => {
  api.cache(true)
  
  return {
    env: {
      test: {
        presets: [
          'babel-preset-solid',
          ['@babel/preset-env', { targets: { node: 'current' } }],
          '@babel/preset-typescript',
        ],
      },
    },
  }
}
