import VueRouter from 'vue-router';
import Vue from 'vue';
import HomeComponent from '../components/pages/HomeComponent';
import AboutMeComponent from '../components/pages/AboutMeComponent';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path: '/mona',
      name: 'AboutMeComponent',
      component: AboutMeComponent
    },
  ],
});
