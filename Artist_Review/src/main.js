// import './assets/main.css'
// import '@/assets/css/all.css'
import '@/assets/css/all.css'
import '@/assets/js/bootstrap.js'
import '@/assets/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// createApp(App).mount('#app')


  createApp(App).use(router).mount('#app');
 