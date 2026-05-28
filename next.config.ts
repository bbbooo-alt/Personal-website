import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/Personal-website',
  assetPrefix: '/Personal-website',
  images: {
    unoptimized: true,
  },
  // 静态导出时跳过 API 路由
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
