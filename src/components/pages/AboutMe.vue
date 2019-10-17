<template>
    <section class="container section-padding">
        <h3>About Me</h3>
        <p>{{ text }}</p>
    </section>
</template>

<script>
  import aboutMe from '../../assets/data/aboutMe.json';
  export default {
    name: 'AboutMe',

    data() {
      return {
        text: aboutMe.text,
      }
    }
  }
</script>
