import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import client from './api/client'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// client.get('/api/hello').then(res => {
//   console.log(res.data.message) // "Hello from Python!"
// })
