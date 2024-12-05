/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**',
      },
      {
        protocol: 'http',
        hostname: 'commons.wikimedia.org',
        pathname: '/wiki/Special:FilePath/**',
      }
    ],
  },
};

export default nextConfig;
