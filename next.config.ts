import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Ensure Turbopack uses the project directory as root to avoid lockfile confusion
    turbopack: {
      root: __dirname,
    },
  },
};

export default nextConfig;
