import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/loginView.vue'),
  },
  {
    path: '/digasuaexperiencia',
    name: 'digasuaexperiencia',
    component: () => import('@/views/experienciaView.vue'),
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import('@/views/CadastroView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
