/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function (config) {
    // Set this to false to disable cache for working on HomeflowNEXT module locally without
    // restarting server (slows down builds significantly)
    config.cache = true;
    // config.module.rules.push({
    //   test: /\.ya?ml$/,
    //   use: 'yaml-loader',
    // });
    // config.experiments = {
    //   layers: true,
    //   topLevelAwait: true
    // };
    return config;
  },
};

module.exports = nextConfig;
