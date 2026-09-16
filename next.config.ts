import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/casos-de-exito',
        destination: '/servicios',
        permanent: false,
      },
      {
        source: '/soluciones-industriales/:path*',
        destination: '/servicios/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
