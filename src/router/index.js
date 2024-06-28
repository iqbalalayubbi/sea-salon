import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import Review from "../views/Review.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Reservation from "@/views/Reservation.vue";
import AdminPanel from "@/views/AdminPanel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "adminPanel",
      component: AdminPanel,
    },
    {
      path: "/",
      name: "landingpage",
      component: Landingpage,
    },
    {
      path: "/review",
      name: "review",
      component: Review,
    },
    {
      path: "/reservation",
      name: "reservation",
      component: Reservation,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});

export default router;
