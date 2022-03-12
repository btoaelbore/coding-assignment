<template>
  <div class="navigation-bar">
    <router-link to="/">Products</router-link>
    <router-link to="/cart">Cart ()</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'NavigationBar',
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
