import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ultra.kg",
        pathname: "/upload/resize_cache/**",
      },
      {
        protocol: "http",
        hostname: "51.20.251.254", 
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
