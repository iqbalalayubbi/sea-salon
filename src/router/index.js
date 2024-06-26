import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import Review from "../views/Review.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "landingpage",
    //   component: Landingpage,
    // },
    // {
    //   path: "/",
    //   name: "review",
    //   component: Review,
    // },
    // {
    //   path: "/",
    //   name: "register",
    //   component: Register,
    // },
    {
      path: "/",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
