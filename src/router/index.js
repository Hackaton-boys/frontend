import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {

    name: 'login',
    path: '/login',
    component: () => import('@/views/loginView.vue'),
  },
  {
    name: 'reservas',
    path: '/reservas',
    component: () => import('@/views/ReservasView.vue'),
  },
  {

    path: '/digasuaexperiencia',
    name: 'digasuaexperiencia',
    component: () => import('@/views/experienciaView.vue'),
},
{

  name: 'sobre',
  path: '/sobre',
  component: () => import('@/views/SobreView.vue')
},
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import('@/views/CadastroView.vue'),
  },
  {
    path: '/maps',
    name: 'Maps',
    component: () => import('@/views/MapsView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
