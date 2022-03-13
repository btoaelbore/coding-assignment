import _isUndefined from 'lodash/isUndefined';

export default class CartItem {
    constructor(cartItem) {
        this.name = !_isUndefined(cartItem.name) ? cartItem.name : '';
        this.description = !_isUndefined(cartItem.description) ? cartItem.description : '';
        this.price = !_isUndefined(cartItem.price) ? cartItem.price : 0;
        this.quantity = !_isUndefined(cartItem.quantity) ? cartItem.quantity : 0;
    }
}