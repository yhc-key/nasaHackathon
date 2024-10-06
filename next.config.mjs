/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages에 배포하기 위한 설정
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://yhc-key.github.io/nasaHackathon/' : '',
  trailingSlash: true, // 슬래시를 포함하여 URL을 정리합니다.
};

export default nextConfig;

