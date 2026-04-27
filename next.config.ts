import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are hosting on https://Sabahmushtaq.github.io/ironheavengym/
  // uncomment the line below and replace 'ironheavengym' with your repo name
  // basePath: '/ironheavengym',
};

export default nextConfig;
