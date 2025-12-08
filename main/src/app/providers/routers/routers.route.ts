import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import { notfoundRoute } from '@/pages/notfound';
import { homePageRoute } from '@/pages/home';
import { loginPageRoute } from '@/pages/login';

const routes: RouteRecordRaw[] = [loginPageRoute, homePageRoute, notfoundRoute];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (_to, _from, next) => {
  if (_to.meta.title) document.title = _to.meta.title as string;

  next();
});

export { router };
