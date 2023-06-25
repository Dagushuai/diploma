import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 阿里图标库
import "./assets/iconfont/iconfont.css";

 



const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(ElementPlus)

