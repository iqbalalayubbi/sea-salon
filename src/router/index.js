import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import Review from "../views/Review.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "landingpage",
    //   component: Landingpage,
    // },
    {
      path: "/",
      name: "review",
      component: Review,
    },
  ],
});

export default router;
