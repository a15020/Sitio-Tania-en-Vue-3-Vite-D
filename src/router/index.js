import Home from '../App.vue';

const aaa = { template: '<p>aaa</p>' };

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/aaa', name: 'aaa', component: aaa },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
