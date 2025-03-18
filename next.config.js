/* @type {import('next').NextConfig} */
const { NextSeo } = require('next-seo');

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== "HotModuleReplacementPlugin");
    return config;
  },
};