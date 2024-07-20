/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net", // url hostname of your images bucket
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
