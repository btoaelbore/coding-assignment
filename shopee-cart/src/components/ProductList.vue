<template>
  <div class="product-list">
    <ProductListItem 
      v-for="(item, index) in products"
      :key="index"
      :is-cart-item="isCartItem"
      :action-label="actionLabel"
      :product="item"
      @add-to-cart="$emit('addToCart', item)"
      @remove-from-cart="$emit('removeFromCart', item)"
    />
  </div>
</template>

<script>
import ProductListItem from '../components/ProductListItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductListItem,
  },
  props: {
    isCartItem: {
      type: Boolean,
      default: false
    },
    actionLabel: {
      type: String,
      default: ''
    },
    products: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}
</style>
