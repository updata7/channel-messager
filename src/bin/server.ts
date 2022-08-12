/*
 * @Author: CKJiang
 * @Date: 2022-08-12 12:29:58
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-12 14:59:46
 */
var options = {
    mode: 'all',
    cjs: {
        cache: true,
        extensions: false,
        interop: false,
        namedExports: true,
        paths: true,
        vars: true
    },
    await: false
};
var esm = require('esm');

var server = esm(module, options)('../app.js');
// import App from 'app'
// const server = new App()
server.start();
