const notfoundPath = {
  path: '/:pathMatch(.*)*',
  name: 'notfound-page-route',
  meta: {
    title: 'Not Found',
    requiresAuth: false,
  },
};

export { notfoundPath };
