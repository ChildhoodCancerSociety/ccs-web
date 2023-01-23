/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true
      }
    ];
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  }
};

module.exports = nextConfig;
