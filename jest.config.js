module.exports = {
  coverageThreshold: {
    // global: {
    //   branches: 50,
    //   functions: 50,
    //   lines: 50,
    //   statements: 50,
    // },
  },
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  collectCoverage: true,
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,vue}',
    '<rootDir>/src/*.{js,vue}',
    '!**/node_modules/**',
    '!<rootDir>/src/registerServiceWorker.js',
    '!<rootDir>/src/main.js',
  ],
  coverageReporters: ['text-summary', 'lcov', 'text'],
  snapshotSerializers: ['jest-serializer-vue'],
  testPathIgnorePatterns: [
    '<rootDir>/tests/*/*.js',
    '<rootDir>/src/registerServiceWorker.js',
    '<rootDir>/src/main.js',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/tests/*/*.js',
    '<rootDir>/src/registerServiceWorker.js',
    '<rootDir>/src/main.js',
  ],
};
