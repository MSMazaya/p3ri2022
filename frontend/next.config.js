/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async rewrites() {
    return [{ "source": "/api/(.*)", "destination": "/api" }]
  }
}
