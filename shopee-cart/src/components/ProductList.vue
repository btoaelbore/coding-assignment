<template>
  <div class="product-list">
    <ProductListItem 
      :show-item-num="showItemNum"
      :action-label="actionLabel"
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
    showItemNum: {
      type: Boolean,
      default: false,
    },
    actionLabel: {
      type: String,
      default: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-list {
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
</style>
