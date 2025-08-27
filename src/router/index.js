import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/digasuaexperiencia',
    name: 'digasuaexperiencia',
    component: () => import('@/views/experienciaView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
