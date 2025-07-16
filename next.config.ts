import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.artheim.test",
      },
      {
        protocol: "https",
        hostname: "app.ar-t.indev.dk",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
    ],
  },
  allowedDevOrigins: ["http://localhost:3000", "192.168.68.109"],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // i18n: {
  //   locales: ["da-DK", "en-US"],
  //   defaultLocale: "da-DK",
  // },
};

export default nextConfig;
