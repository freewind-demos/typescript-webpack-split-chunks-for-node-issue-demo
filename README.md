TypeScript Webpack Split Chunks for Node Issue Demo
==================================================================

在node环境下（`target: 'node'`），`splitChunks`无效。要么是不会生成多个，要么是生成多个后，执行时报错：

```
$ node dist/entry1.4472b9810ffee2d5a90a.js
/Users/peng.li/workspace/typescript-webpack-split-chunks-for-node-issue-demo/dist/entry1.4472b9810ffee2d5a90a.js:20
/******/                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                          ^

TypeError: Cannot read property 'call' of undefined
    at __webpack_require__ (/Users/peng.li/workspace/typescript-webpack-split-chunks-for-node-issue-demo/dist/entry1.4472b9810ffee2d5a90a.js:20:30)
    at Object../src/toUpper.ts (/Users/peng.li/workspace/typescript-webpack-split-chunks-for-node-issue-demo/dist/entry1.4472b9810ffee2d5a90a.js:118:18)

```

所以chunks只适合于浏览器环境

```
npm install
npm run demo
```

It will open page on browser automatically.
