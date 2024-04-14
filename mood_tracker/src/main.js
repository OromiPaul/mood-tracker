// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

// Create a Pinia instance
const pinia = createPinia()

// Tell Vue to use the Pinia plugin
app.use(pinia)

app.mount('#app')
