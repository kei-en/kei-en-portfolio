/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kei-en-portfolio',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

const withTM = require('next-transpile-modules')(['three']);
module.exports = withTM(nextConfig);
