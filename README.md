# eslint-config-nixsys

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) inspired by [eslint-config-google](https://github.com/google/eslint-config-google)

## Installation

```
$ npm install --save-dev eslint eslint-config-nixsys
```

## Usage

Once the `eslint-config-nixsys` package is installed, you can use it by specifying `nixsys` in the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  extends: [
    'nixsys'
  ],
  rules: {
    // Additional, per-project rules...
  }
}
```

## Information

* [List of Rules](https://eslint.org/docs/rules/)
* [Configuring Rules](https://eslint.org/docs/user-guide/configuring/rules)
* [Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs.html)
