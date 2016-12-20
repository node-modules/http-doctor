http-doctor
=======

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/http-doctor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/http-doctor
[travis-image]: https://img.shields.io/travis/node-modules/http-doctor.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/http-doctor
[codecov-image]: https://codecov.io/github/node-modules/http-doctor/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/node-modules/http-doctor?branch=master
[david-image]: https://img.shields.io/david/node-modules/http-doctor.svg?style=flat-square
[david-url]: https://david-dm.org/node-modules/http-doctor
[download-image]: https://img.shields.io/npm/dm/http-doctor.svg?style=flat-square
[download-url]: https://npmjs.org/package/http-doctor

A doctor tool to check your http service.

## Features

- KeepAlive checker.
- Tell you the best KeepAlive timeout setting.

## Installation

```bash
$ npm install http-doctor -g
```

## Quick start

```bash
Usage: $ http-doctor <url>
```

```bash
$ http-doctor https://basement.alipay.com/api/

✅ Server support KeepAlive
✅ Server KeepAlive timeout is 5s, you should set client KeepAlive timeout to 4s
```

If not support KeepAlive:

```bash
❌ Server don\'t support KeepAlive
```

## License

[MIT](LICENSE.txt)
