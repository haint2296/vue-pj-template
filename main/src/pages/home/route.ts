import type { RouteRecordRaw } from 'vue-router';

import { homePath } from '@/shared/router';
import HomePage from './ui/page.vue';

export const homePageRoute: RouteRecordRaw = {
  ...homePath,
  component: HomePage,
};
