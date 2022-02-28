/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/auth',
        destination:
          'https://loginval.aeroportsdeparis.fr/Adp.IdentityFederationV4.web/api/User/get-connected-user',
      },
    ]
  },
}

module.exports = nextConfig
