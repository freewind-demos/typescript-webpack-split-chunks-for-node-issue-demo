TypeScript React Reuse Common Chunks in Multiple Bundle Files Demo
==================================================================

如果在webpack需要指定多个entry并生成多个output，可以使用`splitChunks`将其共用的部分抽成一个单独的common chunk共享给其它chunk使用。

比如使用splitChunks后，dist中将生成：


```
 18K Sep 20 21:35 entry1.67bcd1ec47582a6b1e5a.js
 18K Sep 20 21:35 entry2.96b80b589a2cc6102a62.js
2.6M Sep 20 21:35 vendors~entry1~entry2.94f962b0b7e42c3bc8a0.js
```

其中最后`vendors~entry1~entry2.94f962b0b7e42c3bc8a0.js`是可共用的部分，不再被前两个文件包含进去。

```
npm install
npm run demo
```

It will open page on browser automatically.
