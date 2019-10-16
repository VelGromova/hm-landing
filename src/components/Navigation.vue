<template>
    <nav class="nav">
        <router-link
                class="nav__link"
                v-for="(routes, index) in links"
                :key="index"
                :to="`${routes.page}`">
            {{ routes.text }}
        </router-link>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        {
          text: 'about me',
          page: '/mona'
        },
        {
          text: 'tantra',
          page: '/tantra'
        },
        {
          text: 'massage',
          page: '/massage'
        },
        {
          text: 'therapie',
          page: '/therapie'
        },
        {
          text: 'zweethut',
          page: '/zweethut'
        },
        {
          text: 'workshops',
          page: '/workshops'
        },
        {
          text: 'media',
          page: '/media'
        },
        {
          text: 'contact',
          page: '/contact'
        }
      ]
    }
  }
}
</script>

<style>
    .nav__link {
        margin-left: 15px;
        text-transform: uppercase;
    }
</style>
