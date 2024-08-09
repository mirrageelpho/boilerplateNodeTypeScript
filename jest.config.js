/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  preset: 'ts-jest/presets/js-with-ts',
  // allowImportingTsExtensions: true,
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
    "^.+.ts$": ["ts-jest",{}],
  },
};