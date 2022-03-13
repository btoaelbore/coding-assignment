import _isUndefined from 'lodash/isUndefined';

export default class Product {
    constructor(product) {
        this.name = !_isUndefined(product.name) ? product.name : '';
        this.description = !_isUndefined(product.description) ? product.description : '';
        this.price = !_isUndefined(product.price) ? product.price : 0;
        this.inStock = !_isUndefined(product.inStock) ? product.inStock : 0;
    }
}