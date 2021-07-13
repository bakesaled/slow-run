// const esModules = ['[third-party-lib]'].join('|');
require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'jest-setup.ts',
    'src/environments',
    'src/polyfills.ts',
    '.mock.ts',
  ],
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true
    },
    // stringifyContentPathRegex: true,
  },
  testEnvironment: 'jsdom',
  // transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  // transform: {
  //   '^.+\\.js$': 'babel-jest',
  // }
  // transform: {
  //   '^.+\\.[tj]sx?$': 'ts-jest',
  // }
};
