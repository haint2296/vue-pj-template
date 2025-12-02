import type { RouteRecordRaw } from 'vue-router';

import { notfoundPath } from '@/shared/router';
import NotFoundPage from './notfound.page.vue';

export const notfoundRoute: RouteRecordRaw = {
  ...notfoundPath,
  component: NotFoundPage,
};
