export default {
    setCartItems(state, cartItems) {
        state.cartItems = cartItems;
    },

    setTotalCartItem (state, totalQuantity) {
        state.totalQuantity = totalQuantity;
    }
};