import {createApp} from 'vue'
import App from './App.vue'
import Router from "./router"
import ElementPlus from "element-plus"
import "element-plus/lib/theme-chalk/index.css"

//自定义模考
import request from "./utils/request";
import storage from "./utils/storage";


const app = createApp(App)
//全局挂载
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(Router).use(ElementPlus).mount('#app')
