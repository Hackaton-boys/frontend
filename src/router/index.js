import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/loginView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
