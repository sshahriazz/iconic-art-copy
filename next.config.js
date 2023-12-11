/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    largePageDataBytes: 1024 * 10000,
    serverActionsBodySizeLimit: 1024 * 10000,
  },
};

module.exports = nextConfig;
