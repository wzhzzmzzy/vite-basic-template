import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach(() => {
  // navigation guard
});

export default router;
