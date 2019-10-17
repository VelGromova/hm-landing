import Router from 'vue-router';
import Vue from 'vue';
import Home from '../components/pages/Home';
import AboutMe from '../components/pages/AboutMe';
import Tantra from '../components/pages/Tantra';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mona',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/tantra',
      name: 'Tantra',
      component: Tantra
    },
  ],
});
