/**
 * ts-jest is a TypeScript preprocessor with source map support for Jest that lets you
 * use Jest to test projects written in TypeScript.
 *
 *  testEnvironment - options are: could either be node or jsdom
 *
 * testPathIgnorePatterns - don't run test against any file in these folders '/client/', '/cypress/', & '/node_modules/'
 *
 * globalSetup and globalTeardown are configuration for @databases/pg-test npm pkg.
 * This will set up an in-memory postgres server on a free port, before your tests run.
 * It will tear down the postgres server after all your tests run. N.B. Your tests will
 * all share a single database, and execute in parallel, so you should not assume your
 * generated IDs will have consistent values.
 */

module.exports = {
  displayName: 'UduPay-API',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['./client/', './cypress/', './dist/'],
  globalSetup: '<rootDir>/node_modules/@databases/pg-test/jest/globalSetup.js',
  globalTeardown:
    '<rootDir>/node_modules/@databases/pg-test/jest/globalTeardown.js',
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/server/**/*.js,**/*.ts',
    '!**/__tests__/**',
    '!**/node_modules/**',
  ],
};
