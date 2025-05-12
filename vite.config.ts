import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { resolve } from "path";
import { resolve } from 'path'
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
 
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import postcsspxtorem from 'postcss-pxtorem';

// https://vite.dev/config/
export default defineConfig({
  base: '/main/',
  plugins: [
    vue(),
    AutoImport({
      imports:['vue',"vue-router"],
      dts: "src/auto-imports.d.ts"
    }),
    Components({
      dts: "src/components.d.ts",
      resolvers: [AntDesignVueResolver(
        {
          importStyle: false,
        }
      )], // 配置需要自动导入的组件库
    }),
    
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_variables.scss"; @use "@/styles/_mixins.scss";`,
      },
    },
    postcss: {
      plugins: [
        postcsspxtorem({
          rootValue: 75,
          propList: ['*'],
          selectorBlackList: ['.norem'] // 不转换的类名
        }),
      ],
    }
  },

})
