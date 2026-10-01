import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Allow Three.js to be bundled without warnings
  experimental: {},
};

export default nextConfig;
