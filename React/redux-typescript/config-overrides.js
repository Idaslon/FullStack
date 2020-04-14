const path = require('path');

const baseUrl = path.resolve(__dirname, 'src');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@compoments': path.resolve(baseUrl, 'compoments'),
    },
  };

  return config;
};
