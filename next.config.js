// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, './')
    return config
  },
}
