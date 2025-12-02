import { createApp } from 'vue';

import App from './app.vue';

import { router } from './providers/routers';

import '@/app/styles/main.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
