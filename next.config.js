// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// module.exports = {
//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   webpack(config, options) {
//     config.resolve.alias['@'] = path.join(__dirname, './')
//     return config
//   },
// }


/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/

const config = {
  resolve: {
    alias: {
      '@' : path.join(__dirname, './'),
    }
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public,max-age=300,immutable',
          },
        ],
      },
    ]
  },
}

module.exports = config
