import CartItem from "../../../models/cart-item.model";

export default {
    addItemToCart ({ commit, state }, item) {
        let currentCartItems = [...state.cartItems];

        let selectedItemIndex = currentCartItems.findIndex((cartItem) => item.name === cartItem.name);

        if (selectedItemIndex >= 0) {
            currentCartItems[selectedItemIndex].quantity = currentCartItems[selectedItemIndex].quantity + 1;
        } else {
            let newCartItem = new CartItem(item);
            newCartItem.quantity = 1;
            currentCartItems.push(newCartItem);
        }

        commit('setCartItems', currentCartItems);
        commit('setTotalCartItem', state.totalQuantity + 1);
    },
    removeItemFromCart ({ commit, state}, item) {
        let currentCartItems = [...state.cartItems];

        let selectedItemIndex = currentCartItems.findIndex((cartItem) => item.name === cartItem.name);

        if (selectedItemIndex >= 0) {

            if (currentCartItems[selectedItemIndex].quantity > 1) {
                currentCartItems[selectedItemIndex].quantity = currentCartItems[selectedItemIndex].quantity - 1;
            } else {
                currentCartItems.splice(selectedItemIndex, 1);
            }
        }

        commit('setCartItems', currentCartItems);
        commit('setTotalCartItem', state.totalQuantity - 1);
    }
};
