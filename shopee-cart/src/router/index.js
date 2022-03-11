import { createWebHistory, createRouter } from "vue-router";
import ProductPage from "../pages/ProductPage.vue";
import CartPage from "../pages/CartPage.vue";

const routes = [
  {
    path: "/",
    name: "Products",
    component: ProductPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;