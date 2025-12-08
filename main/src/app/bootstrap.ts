import { worker } from '@/shared/services/msw/browser';

const bootstrap = async () => {
  await worker
    .start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    })
    .then(() => {
      console.log('Mock service worker started');
    });
};

export { bootstrap };
