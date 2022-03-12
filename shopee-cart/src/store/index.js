import { createStore } from 'vuex'
import product from'./modules/Product';
import cart from './modules/Cart';

export default createStore({
  modules: {
    product,
    cart
  }
});