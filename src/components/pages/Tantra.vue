<template>
    <section class="container section-padding">
        <h3>Wat is Tantra</h3>
        <p>{{ text }}</p>
    </section>
</template>

<script>
  import tantra from '../../assets/data/tantra.json';

  export default {
    name: 'Tantra',

    data() {
      return {
        text: tantra.text,
      }
    }
  }
</script>
