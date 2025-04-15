/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 