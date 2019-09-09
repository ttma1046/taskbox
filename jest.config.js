const tsJestPreset = require('jest-preset-angular/jest-preset').globals['ts-jest'];
const tsModuleNameMapper = require('jest-preset-angular/jest-preset').globals['ts-jest'];

module.exports = {
  coveragePathIgnorePatterns: [
    "/jest-config/",
    "/node_modules/"
  ],
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/jest-config/setupJest.ts"],
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-preset-angular/AngularSnapshotSerializer.js",
    "<rootDir>/node_modules/jest-preset-angular/HTMLCommentSerializer.js"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/build/",
    "/storybook-static/"
  ],
  globals: {
    'ts-jest': {
      ...tsJestPreset,
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  moduleNameMapper: {
    ...tsModuleNameMapper,
    "\\.(css|less)$": "identity-obj-proxy"
  }
};
