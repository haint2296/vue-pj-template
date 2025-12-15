import type { RouteRecordRaw } from 'vue-router';

import { homePath } from '@/shared/router';
import HomePage from './ui/page.vue';
import { BaseLayout } from '@/widgets/layout';

export const homePageRoute: RouteRecordRaw = {
  ...homePath,
  component: BaseLayout,
  children: [
    {
      path: '',
      component: HomePage,
    },
  ],
};
