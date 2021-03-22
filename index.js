'use strict';

module.exports = {
  extends: [
    'eslint:recommended'
  ],
  rules: {
    // Possible Errors
    // https://eslint.org/docs/rules/#possible-errors
    // ----------------------------------------------

    // 'for-direction': 'off',
    // 'getter-return': 'off',
    // 'no-async-promise-executor': 'off',
    'no-await-in-loop': 'error',
    // 'no-compare-neg-zero': 'off',
    // 'no-cond-assign': 'off',
    'no-console': 'warn',
    // 'no-constant-condition': 'off',
    // 'no-control-regex': 'off',
    // 'no-debugger': 'off',
    // 'no-dupe-args': 'off',
    // 'no-dupe-else-if': 'off',
    // 'no-dupe-keys': 'off',
    // 'no-duplicate-case': 'off',
    // 'no-empty': 'off',
    // 'no-empty-character-class': 'off',
    // 'no-ex-assign': 'off',
    // 'no-extra-boolean-cast': 'off',
    'no-extra-parens': 'error',
    // 'no-extra-semi': 'off',
    // 'no-func-assign': 'off',
    // 'no-import-assign': 'off',
    // 'no-inner-declarations': 'off',
    // 'no-invalid-regexp': 'off',
    // 'no-irregular-whitespace': 'off',
    'no-loss-of-precision': 'error',
    // 'no-misleading-character-class': 'off',
    // 'no-obj-calls': 'off',
    'no-promise-executor-return': 'error',
    // 'no-prototype-builtins': 'off',
    // 'no-regex-spaces': 'off',
    // 'no-setter-return': 'off',
    // 'no-sparse-arrays': 'off',
    'no-template-curly-in-string': 'error',
    // 'no-unexpected-multiline': 'off',
    // 'no-unreachable': 'off',
    'no-unreachable-loop': 'error',
    // 'no-unsafe-finally': 'off',
    // 'no-unsafe-negation': 'off',
    'no-unsafe-optional-chaining': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    // 'use-isnan': 'off',
    // 'valid-typeof': 'off',

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    '': 'off', //R
    '': 'off', //R
    '': 'off', //R

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------

  }
};
