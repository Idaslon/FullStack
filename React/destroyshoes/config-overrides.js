const path = require('path');

const baseUrl = path.resolve(__dirname, 'src');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@images': path.resolve(baseUrl, 'assets', 'images'),
      '@pages': path.resolve(baseUrl, 'pages'),
      '@components': path.resolve(baseUrl, 'components'),
      '@services': path.resolve(baseUrl, 'services'),
      '@utils': path.resolve(baseUrl, 'utils'),
    },
  };

  return config;
};
