import { defineConfig } from "vite";
const path = require('path');
import {
  ViteWeappTailwindcssPlugin as vwt,
  postcssWeappTailwindcssRename,
} from "weapp-tailwindcss-webpack-plugin";
import uni from '@dcloudio/vite-plugin-uni'
const isH5 = process.env.UNI_PLATFORM === "h5";
const postcssPlugins = [require("autoprefixer")(), require("tailwindcss")()];
if (!isH5) {
  postcssPlugins.push(
    require("postcss-rem-to-responsive-pixel")({
      rootValue: 32,
      propList: ["*"],
      transformUnit: "rpx",
    })
  );
  postcssPlugins.push(postcssWeappTailwindcssRename());
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(), isH5 ? undefined : vwt()
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