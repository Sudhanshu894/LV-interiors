import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
    // Disable image optimization in dev for faster startup
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Improve dev server performance
  experimental: {
    optimizePackageImports: ['next/image'],
  },
  // Turbopack configuration (Next.js 16 uses Turbopack by default)
  turbopack: {},
};

export default nextConfig;
