import Product from '../../../models/product.model';

export default {
    setProducts ({ commit }, products) {
        let productList = products.map(product => new Product(product));
        commit('setProducts', productList);
    }
};