import { Enums } from '../models/enum.defination';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/LoginView/LoginView.vue'),
    meta: {
      template: Enums.LayoutTemplate.Default,
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView/LoginView.vue'),
    meta: {
      template: Enums.LayoutTemplate.Default,
      requiresAuth: false,
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView/SignupView.vue'),
    meta: {
      template: Enums.LayoutTemplate.Default,
      requiresAuth: false,
    },
  },
  {
    path: '/task',
    name: 'task',
    component: () => import('../views/TaskView/TaskView.vue'),
    meta: {
      template: Enums.LayoutTemplate.Authed,
      requiresAuth: true,
    },
  },
];

export default routes;
