<template>
  <Home />
</template>

<script>
// replace with router view
import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
