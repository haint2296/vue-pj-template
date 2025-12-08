import type { RouteRecordRaw } from 'vue-router';

import { loginPath } from '@/shared/router';
import LoginPage from './ui/page.vue';

export const loginPageRoute: RouteRecordRaw = {
  ...loginPath,
  component: LoginPage,
};
