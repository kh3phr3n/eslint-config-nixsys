'use strict';

const assert = require('assert');
const eslint = require('eslint');

// Local imports
const conf = require('../');

// Files to lint
const repoFiles = [
  'index.js',
  'test/test.js',
];

// Use the rules defined in this repo
const eslintOpts = {
  rules: conf.rules,
  useEslintrc: false,
  envs: ['node', 'es6'],
  parserOptions: { ecmaVersion: 2018 },
};

// Runs the linter on the repo files
const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(repoFiles);
assert.strictEqual(report.errorCount, 0);
assert.strictEqual(report.warningCount, 0);

repoFiles.forEach((file, index) => {
  assert(report.results[index].filePath.endsWith(file));
});
