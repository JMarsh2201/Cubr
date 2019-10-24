const isProd = () => process.env.NODE_ENV === 'production'

module.exports = (api) => {
  const presets = ['@babel/env'];

  api.cache(isProd)

  return {
    presets
  }
}
