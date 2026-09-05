import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/casos-de-exito',
        destination: '/soluciones-industriales',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
