/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    YOUR_SERVICE_ID:'service_2gzteos',
    YOUR_TEMPLATE_ID:'template_gqxf38p',
    YOUR_PUBLIC_KEY:'-gbYQsi7djBUFOZ2_'
  },
}

module.exports = nextConfig
