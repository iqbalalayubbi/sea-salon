import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/Landingpage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingpage",
      component: Landingpage,
    },
  ],
});

export default router;
