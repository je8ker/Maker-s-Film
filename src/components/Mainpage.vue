<template id="app">
  <div>
    <Header-nav/>
  </div>
  <main>
    <Main-carousel/>
    <Mainintroduce/>
    <fileinput/>
  </main>
  <Footermain/>
</template>

<script>
import HeaderNav from './Header-nav.vue';
import MainCarousel from './Main-carousel.vue';
import Footermain from './Footer-footer.vue';
import Mainintroduce from './Main-introduce.vue';
import fileinput from './fileinput.vue';

export default {
  name: 'Mainpage',
  components: {
    HeaderNav,
    MainCarousel,
    Footermain,
    Mainintroduce,
    fileinput,
  },
};
</script>

<style>

</style>