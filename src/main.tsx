import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './tailwind.css' // 确保导入tailwind.css
// import './index.css'
// 导入 rem 适配方案
import { initFlexible } from './utils/rem';
// 初始化 rem 适配
initFlexible();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)