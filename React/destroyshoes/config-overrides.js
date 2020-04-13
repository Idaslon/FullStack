const path = require('path');

const baseUrl = path.resolve(__dirname, 'src');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      // '@assets': path.resolve(baseUrl, 'assets'),
      '@images': path.resolve(baseUrl, 'assets', 'images'),
    },
  };

  return config;
};
