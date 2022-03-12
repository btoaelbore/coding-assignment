<template>
  <div>
    <ProductList 
      :show-item-num="false"
      :action-label="'Add to Cart'"
      :products="products"
    />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import { PRODUCTS } from '../Constants/Products.js';
export default {
  name: 'Product',
  components: {
    ProductList,
  },
  data () {
    return { 
      products: PRODUCTS,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
