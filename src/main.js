import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router, axios)
app.mount('#app')
