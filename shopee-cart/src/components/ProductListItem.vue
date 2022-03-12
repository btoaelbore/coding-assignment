<template>
  <div class="product-list-item">
    <div class="product-label">
      <span class="product-name">{{ product.name }} &nbsp;</span> - 
      <span>&nbsp; {{ formattedPrice }}</span>
      <span v-if="showItemNum">&nbsp; ({{ product.quantity }})</span>
    </div>
    <button @click="onClick">{{ actionLabel }}</button>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    showItemNum: {
      type: Boolean,
      default: false,
    },
    actionLabel: {
      type: String,
      default: '',
    },
    product: {
      type: Object,
    }
  },
  computed: {
    formattedPrice () {
      return this.product.price.toFixed(2);
    }
  },
  methods: {
    onClick () {
      if (!this.showItemNum) {
        this.$emit('addToCart', this.product);
      } else {
        this.$emit('removeFromCart', this.product);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-list-item {
    border: 1px solid;
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px;
    margin-top: 15px;
}

.product-label {
  display: flex;
  align-items: center;
}

.product-name {
  font-weight: bold;
}

button {
  background-color: #2D4053;
  padding: 8px 15px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: white;
  color: black;
}
</style>
