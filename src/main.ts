import { createApp } from 'vue'
// import './style.css'
import router from './router';
import App from './App.vue'
import './styles/main.scss'
// 导入 rem 适配方案
import { initFlexible } from './utils/flexible';
import directive from './directives';


// 初始化 rem 适配
initFlexible();
// 创建应用实例
const app = createApp(App)
app.use(router);
directive(app);
// 挂载应用
app.mount('#app') 