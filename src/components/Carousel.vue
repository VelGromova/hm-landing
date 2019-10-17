<template>
    <div class="carousel-view">
        <transition-group
                class="carousel"
                tag="div">
            <div
                    v-for="slide in slides"
                    class="slide"
                    :key="slide.id">
                <div class="slide__bg"
                     :style="{ backgroundImage: 'url(' + require(`@/assets/images/${slide.src}.jpg`) + ')' }">
                    <h2 class="slide__title"> {{ slide.title }} </h2>
                </div>
            </div>
        </transition-group>
        <div class='carousel-controls'>
            <button class='carousel-controls__button' @click="previous">prev</button>
            <button class='carousel-controls__button' @click="next">next</button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      currentNumber: 0,
      timer: null,
      slides: [
        {
          title: 'Tantra',
          id: 1,
          src: 'tantra'
        },
        {
          title: 'Massage',
          id: 2,
          src: 'massage'
        },
        {
          title: 'Therapy',
          id: 3,
          src: 'therapy'
        }
      ]
    }
  },
  methods: {
    next () {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>

<style lang="scss">
    .carousel-view {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .carousel {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100%;
        min-height: 25em;
    }
    .slide {
        flex: 0 0 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-white);
        transition: transform 0.3s ease-in-out;
        &__bg {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 70vh;
            background-size: cover;
        }
        &__title {
            letter-spacing: 2px;

        }
    }
    .slide:first-of-type {
        opacity: 0;
    }
    .slide:last-of-type {
        opacity: 0;
    }
    .carousel-controls__button {
        background: #de6a26;
        border: 0;
        border-radius: 4px;
    }
</style>
