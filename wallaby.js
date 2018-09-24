const path = require('path');
module.exports = function (wallaby) {
  return {

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
        typescript: require('typescript')
      })
    },

    env: {
      runner: 'node',
      type: 'node'
    },

    files: [
      'package.json',
      'test/**/*.js',
      'tsconfig.json',
      'src/**/*.ts?(x)',
      '!src/**/*spec.ts?(x)'
    ],


    setup: (wallaby) => {
      wallaby.testFramework.configure({
        moduleNameMapper: {
          '^.+\\.(jpg|jpeg|png|gif|svg)$': require.resolve('react-scripts-ts/config/jest/fileTransform.js'),
          '^.+\\.css$': require.resolve('react-scripts-ts/config/jest/cssTransform.js')
        },
        "testURL": "http://localhost/"
      });
    },
    testFramework: 'jest',
    tests: ['src/**/*.spec.ts?(x)']
  };
};