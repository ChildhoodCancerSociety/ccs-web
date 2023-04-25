/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  redirects: [
    {
      source: "/about-us",
      destination: "/about",
      permanent: true
    },
    {
      source: "/contact-us",
      destination: "/contact",
      permanent: true
    }
  ],
  images: {
    domains: ["placeholder.co"],
    formats: ["image/avif", "image/webp"]
  }
}

module.exports = nextConfig
