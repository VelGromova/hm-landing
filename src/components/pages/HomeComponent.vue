<template>
    <div>
        <header-component />
        <carousel />
        <footer-component />
    </div>
</template>

<script>
import HeaderComponent from '../layout/HeaderComponent'
import FooterComponent from '../layout/FooterComponent'
import Carousel from '../Carousel'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    Carousel
  }
}
</script>
