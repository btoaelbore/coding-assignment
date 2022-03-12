<template>
  <div class="product-list-item">
    <div class="product-label">
      <span class="product-name">{{ showItemNum }} &nbsp;</span> - 
      <span>&nbsp; {{ actionLabel }}</span>
      <span v-if="showItemNum">&nbsp; (0)</span>
    </div>
    <button>{{ actionLabel }}</button>
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
    padding: 20px;
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
