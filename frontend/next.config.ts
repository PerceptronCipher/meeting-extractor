/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Uncomment this if deploying as a pure static site
  images: {
    unoptimized: true, // Required for static exports
  },
}

module.exports = nextConfig
