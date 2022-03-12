import { createStore } from 'vuex'
import product from'./modules/Product';

export default createStore({
  modules: {
    product,
  }
});