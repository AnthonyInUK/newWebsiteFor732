/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
