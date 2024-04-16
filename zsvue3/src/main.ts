import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mitt from 'mitt'

const Mitt = mitt()

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt
  }
}

const app = createApp(App)

app.config.globalProperties.$Bus = Mitt

app.mount('#app')
