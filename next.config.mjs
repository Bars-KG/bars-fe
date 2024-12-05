/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**', // Sesuaikan dengan pola gambar yang diinginkan
      },
      {
        protocol: 'http',
        hostname: 'commons.wikimedia.org',
        pathname: '/wiki/Special:FilePath/**', // Sesuaikan dengan pola gambar yang diinginkan
      }
    ],
  },
};

export default nextConfig;
