import { createApp } from 'vue';
import { bootstrap } from './bootstrap';

import App from './app.vue';

import { router } from './providers/routers';

import '@/app/styles/main.css';

/**
 * Bootstrap the application
 * - Start the mock service worker
 * - Create the app
 * - Use the router
 * - Mount the app
 * - Catch any errors
 */
bootstrap()
  .then(() => {
    const app = createApp(App);
    app.use(router);
    app.mount('#app');
  })
  .catch((error) => {
    console.error(error);
    alert(`Error starting the application: ${error.message}`);
    throw error;
  });
