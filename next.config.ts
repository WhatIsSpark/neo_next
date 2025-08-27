import type { NextConfig } from "next";

// Configuration file for Next.js

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ]
  }
  /* config options here */
};

export default nextConfig;
