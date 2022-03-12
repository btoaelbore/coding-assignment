<template>
  <div>
    <ProductList 
      :show-item-num="true"
      :action-label="'Remove from Cart'"
    />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
export default {
  name: 'CartPage',
  components: {
    ProductList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
