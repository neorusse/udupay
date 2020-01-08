/**
 * ts-jest is a TypeScript preprocessor with source map support for Jest that lets you
 * use Jest to test projects written in TypeScript.
 *
 * globalSetup and globalTeardown are configuration for @databases/pg-test npm pkg.
 * This will set up an in-memory postgres server on a free port, before your tests run.
 * It will tear down the postgres server after all your tests run. N.B. Your tests will
 * all share a single database, and execute in parallel, so you should not assume your
 * generated IDs will have consistent values.
 */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/client/", "/cypress/"],
  globalSetup: "<rootDir>/node_modules/@databases/pg-test/jest/globalSetup.js",
  globalTeardown:
    "<rootDir>/node_modules/@databases/pg-test/jest/globalTeardown.js"
};
