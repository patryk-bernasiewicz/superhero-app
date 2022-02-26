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
  jest: {
    configure: {
      moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@features(.*)$': '<rootDir>/src/features$1',
        '^@context(.*)$': '<rootDir>/src/context$1',
        '^@interfaces(.*)$': '<rootDir>/src/interfaces$1',
      },
    },
  },
};
