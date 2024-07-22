/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co", // url hostname of your images bucket
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
