import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import { router } from './router/router';

const pinia = createPinia()

const VueApp = createApp(App)

VueApp.use(pinia)
VueApp.use(router)

VueApp.mount('#app')
