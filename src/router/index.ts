import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router';
import routes from './routes';

declare const NProgress: any;

console.log('BASE_URL', import.meta.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(`${import.meta.env.BASE_URL || ''}`),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes as RouteRecordRaw[],
} as RouterOptions);

router.beforeEach((to, _, next) => {
  console.log(to);
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
