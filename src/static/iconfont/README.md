# 图标

图标显示依靠 `uni-icons` 组件

- [文档地址](https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html#%E4%BB%8B%E7%BB%8D)

## 基本教程

```vue
<uni-icons type="contact" size="30"></uni-icons>
```

Props:

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
|size | Number | 24 | 图标大小 |
|type | String | -  | 图标图案，参考示例 |
|color | String | - | 图标颜色 |
|customPrefix | String |  - | 自定义图标 |

Events:

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| @click | 点击 Icon 触发事件 | - |

## iconfont集成教程

模板主要使用 `uni-icons` 实现图标显示，但是官方的图标根本不够用。 你可以集成 `iconfont`， 下述为教程。

1. 正常把你需要的图标加入购物车，并添加到你的项目；
2. 打包下载，仅复制 `iconfont.css` 和 `iconfont.ttf` 到 `/src/static/iconfont/` 即可

使用方式:

```vue
<uni-icons custom-prefix="iconfont" type="icon-arrow-right" size="18" color="#999"></uni-icons>
```

type 就是图标class名称加上 `icon-` 前缀
