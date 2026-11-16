import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/work/:slug", destination: "/portfolio/:slug", permanent: true },
      { source: "/kwechiri", destination: "/portfolio/kwechiri", permanent: true },
      { source: "/services", destination: "/contact#services", permanent: true },
    ];
  },
};

export default nextConfig;
