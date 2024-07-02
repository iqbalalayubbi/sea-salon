import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import Review from "../views/Review.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Reservation from "@/views/Reservation.vue";
import AdminPanel from "@/views/AdminPanel.vue";
import ClientPanel from "@/views/ClientPanel.vue";
import Profile from "@/views/Profile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingpage",
      component: Landingpage,
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
    {
      path: "/dashboard",
      name: "adminPanel",
      component: AdminPanel,
      meta: {
        isAuth: true,
      },
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
      path: "/client/dashboard",
      name: "clientDashboard",
      component: ClientPanel,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    next();
  }
  next();
});

export default router;
