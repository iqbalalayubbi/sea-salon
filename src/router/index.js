import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import Review from "../views/Review.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Reservation from "../views/Reservation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "reservation",
      component: Reservation,
    },
  ],
});

export default router;
