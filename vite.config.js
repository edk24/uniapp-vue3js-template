import { defineConfig } from "vite";
const path = require('path');
import { UnifiedViteWeappTailwindcssPlugin as uvtw } from 'weapp-tailwindcss/vite'
import uni from '@dcloudio/vite-plugin-uni'
const isH5 = process.env.UNI_PLATFORM === "h5";
const isApp = process.env.UNI_PLATFORM === 'app'
const WeappTailwindcssDisabled = isH5 || isApp
const postcssPlugins = [require("autoprefixer")(), require("tailwindcss")()];
if (!isH5) {
  postcssPlugins.push(
    require("postcss-rem-to-responsive-pixel")({
      rootValue: 32,
      propList: ["*"],
      transformUnit: "rpx",
    })
  );
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    uvtw({
      disabled: WeappTailwindcssDisabled
    }),
    // isH5 ? undefined : vwt(),
  ],
  resolve: {
    alias: {
      '/@': path.resolve('./src'),
      '@/': path.resolve('./src')
    }
  },
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  },
  // 省略其他配置内容

})