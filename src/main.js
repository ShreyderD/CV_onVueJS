import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/../css/reset.css'
import '@/../css/style.css'
import '@/../css/fontastic/styles.css'

createApp(App).use(router).mount('#app')
