/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects() {
    return [
      {
        source: "/",
        destination: "/welcome",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
