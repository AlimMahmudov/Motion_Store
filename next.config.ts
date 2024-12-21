import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ultra.kg",
        pathname: "/upload/resize_cache/**",
      },
    ],
  },
};

export default nextConfig;
