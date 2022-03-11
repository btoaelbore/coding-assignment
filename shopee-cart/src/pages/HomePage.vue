<template>
  <div class="home-page">
    <NavigationBar class="navigation-bar"/>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';

export default {
  name: 'HomePage',
  components: {
    NavigationBar,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
    height: 100%;
}
</style>
