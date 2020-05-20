## px2vw inline-style 插件

可将inline-style里的px单位转换为vw

```js

// webpack 配置方法
...

  rules: [{
    ...// js file
    use: [
      {
        loader: 'px2vm-inline',
        options: {
          rootValue: 750,
          vwFixed: 2,
          minPixelValue: 12,
        },
      }
    ],
  }, 
...
```