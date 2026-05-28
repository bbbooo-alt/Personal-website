import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // 静态导出时跳过 API 路由
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
