// Karma configuration
// Generated on Fri Jul 03 2020 20:15:52 GMT+0700 (Western Indonesia Time)
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'specs/**/*Spec.js',
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'specs/**/*Spec.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies
      // webpack configuration
      devtool: 'inline-source-map',
      mode: 'development',
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only',
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'spec'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],

    // config for specific spec reporter
    specReporter: {
      maxLogLines: 5, // limit number of lines logged per test
      suppressSummary: true, // do not print summary
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: false, // do not print information about passed tests
      suppressSkipped: true, // do not print information about skipped tests
      showBrowser: false, // print the browser for each spec
      showSpecTiming: false, // print the time elapsed for each spec
      failFast: true, // test would finish with error when a first fail occurs
      prefixes: {
        success: '    OK: ', // override prefix for passed tests, default is '??? '
        failure: 'FAILED: ', // override prefix for failed tests, default is '??? '
        skipped: 'SKIPPED: ', // override prefix for skipped tests, default is '- '
      },
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    /* possible values: config.LOG_DISABLE || config.LOG_ERROR
    || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG */
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
