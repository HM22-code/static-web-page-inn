import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.scss'
import App from './App.vue'
import Home from './components/Home.vue';
import Legal from './components/Legal.vue';
import Confidentiality from './components/Confidentiality.vue';

// Router component
const router = createRouter({
    history: createWebHistory('/static-web-page-inn/'),
    routes: [
        { path: '/', component: Home },
        { path: '/legal', component: Legal },
        { path: '/confidentiality', component: Confidentiality },
    ]
});
const app = createApp(App)
app.use(router);
app.mount('#app')
