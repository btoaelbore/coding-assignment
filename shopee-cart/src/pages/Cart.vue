<template>
  <div v-if="totalQuantity > 0">
    <ProductList 
      :show-item-num="true"
      :action-label="'Remove from Cart'"
      :products="cartItems"
      @remove-from-cart="removeFromCart"
    />
  </div>
  <div v-else class="no-item-message">
    No Item in the Cart!
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  components: {
    ProductList,
  },
  computed: {
    ...mapGetters('cart', ['cartItems', 'totalQuantity']),
  },
  methods: {
    ...mapActions('cart', ['removeItemFromCart']),

    removeFromCart (item) {
      this.removeItemFromCart(item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-item-message {
  margin-top: 10px;
}
</style>
