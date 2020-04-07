const path = require('path');

const baseUrl = path.resolve(__dirname, 'src');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@services': path.resolve(baseUrl, 'services'),
      '@components': path.resolve(baseUrl, 'components'),
    },
  };

  return config;
};
