import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router)

app.mount('#app')
