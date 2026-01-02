/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true, // Inline critical CSS, defer non-critical
  },
  // Target modern browsers only - skip legacy polyfills
  transpilePackages: [],
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig 