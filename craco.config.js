const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
    },
  },
};
