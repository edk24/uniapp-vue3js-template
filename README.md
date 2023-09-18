# uniapp vue3 js 项目模板

-- by 余晓波 [yuxiaobo64@gmail.com](yuxiaobo64@gmail.com)

## 依赖

- node:14+
- pnpm

## 集成

- tailwindcss (原子化css)
- postcss-rem-to-responsive-pixel (rem2rpx/px)
- iconpark (字节跳动免费图标库)
- less

## 安装 & 运行

```bash
# 安装依赖
$ pnpm install

# 运行 (具体参考 package.json 的 script)
$ pnpm run dev:h5

# 打包
$ pnpm run build:h5
```

## 配置

- .env.development 开发环境通用
- .env.development.local 开发环境个人 (不同步git, 优先级最高)
- .env.production 生产环境通用
- .env.production.local 生产环境个人 (不同步git, 优先级最高)

```bash
# 应用名称
VITE_APP_NAME = ""
# 接口基础地址
VITE_APP_BASE_URL = ""
```

**其他**

主题色/字体大小修改 ---> `tailwind.config.js`
