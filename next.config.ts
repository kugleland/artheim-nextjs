import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.artheim.test",
      },
    ],
  },
  allowedDevOrigins: ["http://localhost:3000", "192.168.68.109"],
};

export default nextConfig;
