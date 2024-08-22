//import '@/assets/styles/all.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import gsap from './plugins/gsap';


const app = createApp(App)

app.use(router).use(store).use(gsap);

app.mount('#app')
