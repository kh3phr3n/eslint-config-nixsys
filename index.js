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

    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    // 'class-methods-use-this': 'off',
    'complexity': 'error',
    'consistent-return': 'error',
    'curly': 'error',
    // 'default-case': 'off',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 'error',
    'no-alert': 'warn',
    'no-caller': 'error',
    // 'no-case-declarations': 'off',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': [
      'error', {
        'allow': [
          'constructors'
        ]
      }
    ],
    // 'no-empty-pattern': 'off',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    // 'no-extra-label': 'off',
    // 'no-fallthrough': 'off',
    'no-floating-decimal': 'error',
    // 'no-global-assign': 'off',
    'no-implicit-coercion': 'error',
    // 'no-implicit-globals': 'off',
    // 'no-implied-eval': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    // 'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    // 'no-new': 'off',
    // 'no-new-func': 'off',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    // 'no-octal': 'off',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    // 'no-redeclare': 'off',
    // 'no-restricted-properties': 'off',
    'no-return-assign': 'error',
    // 'no-return-await': 'off',
    'no-script-url': 'error',
    // 'no-self-assign': 'off',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'warn',
    // 'no-unused-expressions': 'off',
    // 'no-unused-labels': 'off',
    'no-useless-call': 'error',
    // 'no-useless-catch': 'off',
    'no-useless-concat': 'error',
    // 'no-useless-escape': 'off',
    'no-useless-return': 'error',
    // 'no-void': 'off',
    // 'no-warning-comments': 'off',
    // 'no-with': 'off',
    // 'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    // 'radix': 'off',
    'require-await': 'error',
    // 'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    // 'wrap-iife': 'off',
    'yoda': 'error',

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------

    // 'strict': 'off',

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------

    'init-declarations': 'error',
    // 'no-delete-var': 'off',
    // 'no-label-var': 'off',
    // 'no-restricted-globals': 'off',
    // 'no-shadow': 'off',
    // 'no-shadow-restricted-names': 'off',
    // 'no-undef': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    // 'no-unused-vars': 'off',
    'no-use-before-define': 'error',

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------

    // 'array-bracket-newline': 'off',
    'array-bracket-spacing': 'error',
    'array-element-newline': 'off',
    'block-spacing': 'error',
    'brace-style': [
      'error',
      'stroustrup'
    ],
    'camelcase': 'error',
    // 'capitalized-comments': 'off',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    // 'func-names': 'off',
    'func-style': [
      'error',
      'declaration', {
        'allowArrowFunctions': true
      }
    ],
    // 'function-call-argument-newline': 'off',
    // 'function-paren-newline': 'off',
    // 'id-denylist': 'off',
    // 'id-length': 'off',
    // 'id-match': 'off',
    'implicit-arrow-linebreak': 'error',
    'indent': [
      'error',
      2
    ],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    // 'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',
    'lines-between-class-members': [
      'error',
      'always', {
        'exceptAfterSingleLine': true
      }
    ],
    'max-depth': 'error',
    'max-len': [
      'error', {
        'code': 120
      }
    ],
    // 'max-lines': 'off',
    'max-lines-per-function': 'error',
    'max-nested-callbacks': 'error',
    // 'max-params': 'off',
    'max-statements': 'error',
    'max-statements-per-line': 'error',
    // 'multiline-comment-style': 'off',
    'multiline-ternary': [
      'error',
      'always-multiline'
    ],
    'new-cap': [
      'error', {
        'capIsNew': false
      }
    ],
    'new-parens': 'error',
    // 'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    // 'no-bitwise': 'off',
    'no-continue': 'error',
    // 'no-inline-comments': 'off',
    // 'no-lonely-if': 'off',
    // 'no-mixed-operators': 'off',
    // 'no-mixed-spaces-and-tabs': 'off',
    // 'no-multi-assign': 'off',
    'no-multiple-empty-lines': 'error',
    // 'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    // 'no-plusplus': 'off',
    // 'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    // 'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    // 'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [
      'error',
      'below'
    ],
    'object-curly-newline': 'error',
    'object-curly-spacing': [
      'error',
      'always'
    ],
    // 'object-property-newline': 'off',
    // 'one-var': 'off',
    // 'one-var-declaration-per-line': 'off',
    'operator-assignment': 'error',
    'operator-linebreak': [
      'error',
      'before'
    ],
    // 'padded-blocks': 'off',
    'padding-line-between-statements': [
      'error', {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      }
    ],
    'prefer-exponentiation-operator': 'error',
    // 'prefer-object-spread': 'off',
    'quote-props': [
      'error',
      'consistent'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    // 'sort-keys': 'off',
    // 'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    // 'wrap-regex': 'off',

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------

    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-spacing': 'error',
    // 'constructor-super': 'off',
    'generator-star-spacing': 'error',
    // 'no-class-assign': 'off',
    // 'no-confusing-arrow': 'off',
    // 'no-const-assign': 'off',
    // 'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'error',
    // 'no-new-symbol': 'off',
    // 'no-restricted-exports': 'off',
    // 'no-restricted-imports': 'off',
    // 'no-this-before-super': 'off',
    // 'no-useless-computed-key': 'off',
    // 'no-useless-constructor': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    // 'object-shorthand': 'off',
    // 'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    // 'prefer-destructuring': 'off',
    // 'prefer-numeric-literals': 'off',
    // 'prefer-rest-params': 'off',
    // 'prefer-spread': 'off',
    'prefer-template': 'error',
    // 'require-yield': 'off',
    'rest-spread-spacing': 'error',
    // 'sort-imports': 'off',
    // 'symbol-description': 'off',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error'
  }
};
