var makePassword = require('./index');

console.log(makePassword({
	hashAlgorithm: 'sha256',
	masterPassword: 'test',
	data: 'example.org',
	length: 8,
	charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()_-+={}|[]\\:";\'<>?,./'
}));
