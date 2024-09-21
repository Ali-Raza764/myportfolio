/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dummyimage.com",
      },
    ],
  },
};

export default nextConfig;
