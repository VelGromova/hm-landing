<template>
    <div>
        <div class="carousel-layout">
            <carousel />
        </div>
        <services />
    </div>
</template>

<script>
import Carousel from '../Carousel'
import Services from '../Services'

export default {
  name: 'HomeComponent',
  components: {
    Carousel,
    Services,
  }
}
</script>
