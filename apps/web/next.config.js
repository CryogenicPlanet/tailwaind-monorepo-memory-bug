const path = require('path')

const moduleExports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },

  webpack: (config, { isServer, webpack, defaultLoaders }) => {
    // https://github.com/prisma/prisma/issues/6899
    if (isServer) {
      config.externals.push('_http_common')
    }

    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react'
      })
    )

    // Will allow transpilation of shared packages through tsonfig paths
    // @link https://github.com/vercel/next.js/pull/13542

    // TODO or NOTE : Might run into problems import JSON in other packages
    const resolvedBaseUrl = path.resolve(config.context, '../../')
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(tsx|ts|js|jsx)$/,
        include: [resolvedBaseUrl],
        use: [defaultLoaders.babel],
        exclude: (excludePath) => {
          return /node_modules/.test(excludePath)
        }
      }
    ]

    return config
  }
}

module.exports = moduleExports
