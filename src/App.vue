<template>
  <transition name="load" mode="out-in" appear>
    <div id="app">
        <header-component />
          <router-view />
        <footer-component />
    </div>
  </transition>
</template>

<script>
  import '@/assets/css/app.css';
  import HeaderComponent from './components/layout/HeaderComponent';
  import FooterComponent from './components/layout/FooterComponent';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent,
    },
  };
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
