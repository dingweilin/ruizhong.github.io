import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import Components from 'unplugin-react-components/vite';
// import tailwindcss from "tailwindcss"
// import autoprefixer from "autoprefixer"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Components({
      dts: true,
    })
  ],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src'),
    }
  },
  css:{
    // postcss: './postcss.config.ts' // 指定PostCSS配置文件路径
    // 移除内联配置，避免冲突
    // postcss:{
      
    //   plugins: [
    //     tailwindcss,
    //     // autoprefixer,
    // ]
    // }
  }
})
