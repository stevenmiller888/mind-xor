
# mind-xor
[![NPM version][npm-image]][npm-url]
[![build status][circle-image]][circle-url]
[![license][license-image]][license-url]

An XOR plugin for [Mind](https://github.com/stevenmiller888/mind)

## Installation

    $ npm install mind-xor

## Usage

```js
var Mind = require('node-mind');
var xor = require('mind-xor');

Mind()
  .upload(xor)
  .predict([0, 1]);  // ~ 1
```

## License

[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/mind-xor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mind-xor
[circle-image]: https://img.shields.io/circleci/project/stevenmiller888/mind-xor.svg
[circle-url]: https://circleci.com/gh/stevenmiller888/mind-xor
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://tldrlegal.com/license/mit-license