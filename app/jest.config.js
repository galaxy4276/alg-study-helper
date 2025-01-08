/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^@src(.*)$": "<rootDir>/src$1",
    "^@components(.*)$": "<rootDir>/components$1",
    "^@layouts(.*)$": "<rootDir>/layouts$1",
    "^@public(.*)$": "<rootDir>/public$1",
  }
};
