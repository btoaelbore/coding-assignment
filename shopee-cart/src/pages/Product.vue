<template>
  <div>
    <ProductList 
      :show-item-num="false"
      :action-label="'Add to Cart'"
      :products="products"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import { PRODUCTS } from '../mock-data/Products.js';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Product',
  components: {
    ProductList,
  },
  mounted () {
    this.setProducts(PRODUCTS);
  },
  methods: {
    ...mapActions('product', ['setProducts']),
    ...mapActions('cart', ['addItemToCart']),

    addToCart (item) {
      this.addItemToCart(item);
    }
  },
  computed: {
    ...mapGetters('product', ['products']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
