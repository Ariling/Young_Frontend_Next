const withTwin = require("./withTwin");

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  images : {
    domains : ["cdn.pixabay.com"],
  }
});

module.exports = nextConfig;
