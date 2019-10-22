<template>
    <ul class="service">
        <li class="service__block" v-for="block in blocks">
           <h3>{{ block.title }}</h3>
            <p>{{ block.description }}</p>
        </li>
    </ul>
</template>

<script>
    export default {
      data() {
        return {
          blocks: [
            {
                title: 'Tantra',
                description: 'Tantra is a spiritual movement, the origins of which go back some 5,000 years in time. Tantra is a mystical tradition. Tantra is about the mystery of life and life itself. You can deepen the connection with yourself and also experience the depth of existence.'
            },
            {
                title: 'Massage',
                description: 'During a treatment you are invited to be with what is there. Have your attention in yourself. Focus your attention on your inner world and feel, perceive, experience in it.'
            },
            {
               title: 'Therapy',
               description: 'Holos is the Greek word for wholeness. The holistic vision is an open approach in which I assume that everything is connected. For example, if your shoulder is bothering you, it may just be that you are also blocked at other levels. You can think of unprocessed emotions, limiting beliefs / thoughts and fixed patterns. So a signal that your body issues (physical level) can affect your mental, social, emotional and / or spiritual world.'
            },
            {
               title: 'Sweat lodge',
               description: 'A sweat lodge is an age-old place of prayer, cleansing and healing. The hut can be found all over the world, including the Indian tribes in North America. The sweat lodge consists of willow branches that are bent in the shape of an igloo (dome-shaped) according to a certain pattern. The cabin is covered with blankets and tarpaulin, so that it gets dark inside.'
            },
          ],
        }
      }
    }
</script>

<style lang="scss">
    .service {
        display: flex;
        &__block {
            background-color: var(--color-main);
        }
    }
</style>
