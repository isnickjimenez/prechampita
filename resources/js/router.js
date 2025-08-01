import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes de las páginas
import Home from './Pages/Home.vue';
import About from './Pages/About.vue'; // Crea esta página
import Registration from './Pages/Registration.vue';
import Psychology from './Pages/Psychology.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/nosotros', component: About, name: 'nosotros' },
  { path: '/inscripciones', component: Registration, name: 'inscripciones' },
  { path: '/psicologia', component: Psychology, name: 'psicologia' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
