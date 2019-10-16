<template>
    <header class="header">
        <div class="container">
            <div class="header-wrapper">
                <a href="#" class="logo">
                    <img src="https://images.squarespace-cdn.com/content/5308f1c9e4b0c1a4a9397005/1471482143067-73P19MRZ07V2CSKRQ64Z/Name+Handwritten+Logo+name+early+bird.png?content-type=image%2Fpng" alt="">
                </a>
                <navigation></navigation>
            </div>
        </div>
    </header>
</template>

<script>
import Navigation from '../Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
    .header {
        padding: 20px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 1em;
        background-color: #ededed;
        position: relative;
        .header-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo {
                display: block;
                width: 200px;
                max-width: 240px;
                img {
                    width: 100%;
                }
            }
        }
    }
</style>
