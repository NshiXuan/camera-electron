import { createApp } from 'vue'
import App from './App.vue'

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入tailwind.css
import '@renderer/assets/css/tailwind.css'
import '@renderer/assets/css/global.scss'

// 导入pinia
import { createPinia } from 'pinia'
// pinia插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)

app.mount('#app')
