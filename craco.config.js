const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@features': path.resolve(__dirname, 'src/features/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@features(.*)$': '<rootDir>/src/features$1',
      },
    },
  },
};
