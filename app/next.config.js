// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.aceternity.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'images.unsplash.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
