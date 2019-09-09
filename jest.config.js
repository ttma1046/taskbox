const tsJestPreset = require('jest-preset-angular/jest-preset').globals['ts-jest'];

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['jest-preset-angular/setupJest'],
  globals: {
    'ts-jest': {
      ...tsJestPreset,
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
};
