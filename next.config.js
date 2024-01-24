/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  withCsrf : true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.etsystatic.com",
      },
    ],
  },
};