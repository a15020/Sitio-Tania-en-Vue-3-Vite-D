<script>
// import HelloWorld from './components/HelloWorld.vue';
import Main from '../components/Main.vue';
import ShopSection from '../components/ShopSection.vue';

export default {
  data() {
    return {};
  },

  components: {
    Main,
    ShopSection,
  },
};
</script>

<template>
  <Main></Main>
</template>

<style lang="scss">
#app {
  all: unset;
}
</style>
