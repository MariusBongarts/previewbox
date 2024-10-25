//jest.config.js
module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': '<rootDir>/node_modules/babel-jest',
  },
  testTimeout: 15000,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/dist/'],
};
