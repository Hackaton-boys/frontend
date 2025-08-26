import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/sobre',
    name: 'Sobre Nós',
    component: () => import('@/views/SobreView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
