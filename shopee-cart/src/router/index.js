import { createWebHistory, createRouter } from "vue-router";
import Product from "../pages/Product.vue";
import Cart from "../pages/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Products",
    component: Product,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;