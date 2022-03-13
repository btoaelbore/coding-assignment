<template>
  <div class="navigation-bar">
    <router-link to="/">Products</router-link>
    <router-link to="/cart">Cart ({{ totalQuantity }})</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'NavigationBar',
  computed: {
    ...mapGetters('cart', ['totalQuantity']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation-bar {
  background-color: #1bae7b;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

a, a:link {
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 4px;
  margin: 10px;
  color: white;
}

a:hover, .router-link-active {
  background-color: white;
  color: black;
}
</style>
