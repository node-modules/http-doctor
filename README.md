http-doctor
=======

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![Node.js CI](https://github.com/node-modules/http-doctor/actions/workflows/nodejs.yml/badge.svg)](https://github.com/node-modules/http-doctor/actions/workflows/nodejs.yml)

[npm-image]: https://img.shields.io/npm/v/http-doctor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/http-doctor
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
$ http-doctor https://www.alipay.com/

✅ Server support KeepAlive
✅ Server KeepAlive timeout > 30s, you should set client KeepAlive timeout to 30s
```

If not support KeepAlive:

```bash
❌ Server don\'t support KeepAlive
```

## License

[MIT](LICENSE.txt)
