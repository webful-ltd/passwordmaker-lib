# passwordmaker-lib

[![Build Status](https://dl.circleci.com/status-badge/img/gh/webful-ltd/passwordmaker-lib/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/webful-ltd/passwordmaker-lib/tree/main)

A library for [Password Maker](https://passwordmaker.org/).

Forked from [emersion/node-passwordmarker](https://github.com/emersion/node-passwordmaker), with tweaks
to allow client-side use without Browserify.

Key changes:
* Switched from Node's `Crypto` module to [crypto-js](https://www.npmjs.com/package/crypto-js).
* Dropped MD4 support, as it's not included in that library.

## Usage

```js
var makePassword = require('@webful/passwordmaker-lib');

console.log(makePassword({
	hashAlgorithm: 'hmac-sha256',
	masterPassword: 'MySuperStrongMasterPassword',
	data: 'example.org',
	length: 15,
	charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+={}|[]\\:";\'<>?,./',
}));
```
