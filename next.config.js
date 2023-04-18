/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    // here we can add the domains we want to use
    domains: ['diegovillafane.com'],
  },
}

module.exports = nextConfig
