/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['res.cloudinary.com', 'i.ytimg.com']
  },
  async rewrites() {
    return [{ "source": "/api/(.*)", "destination": "/api" }]
  }
}
