<template>
  <div>
    <ProductList 
      :show-item-num="false"
      :action-label="'Add to Cart'"
    />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
export default {
  name: 'ProductPage',
  components: {
    ProductList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
