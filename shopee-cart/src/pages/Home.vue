<template>
  <div class="home">
    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';

export default {
  name: 'Home',
  components: {
    NavigationBar,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    height: 100%;
}
</style>
