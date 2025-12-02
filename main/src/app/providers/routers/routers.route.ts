import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import { notfoundRoute } from '@/pages/notfound';
import { homePageRoute } from '@/pages/home';

const routes: RouteRecordRaw[] = [homePageRoute, notfoundRoute];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (_, _from, next) => {
  next();
});

export { router };
