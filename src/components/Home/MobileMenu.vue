<template>
  <main
    class="bg-cream-brown w-screen h-screen fixed top-0 left-0 z-[99]"
    v-show="navbarState.isShow"
  >
    <Iconify
      icon="ep:close"
      width="30"
      height="50"
      class="text-red-700 absolute top-0 right-5"
      @click="navbarState.closeNav"
    />
    <h1 class="mt-20 text-center text-3xl text-primary font-bold">SEA Salon</h1>
    <nav class="flex flex-col items-center h-full w-full gap-5 mt-5">
      <a
        v-for="menu in menus"
        :key="menu"
        :href="`#${menu.toLowerCase()}`"
        @click="clickMenu(menu)"
        class="py-3 w-1/2 rounded-md font-bold text-center"
        :class="{ 'bg-primary text-cream': menu == menuActive }"
        >{{ menu }}
      </a>
      <div class="flex flex-col w-full items-center gap-3">
        <RouterLink to="/register" class="btn btn-primary w-1/2"
          >Register</RouterLink
        >
        <RouterLink to="/login" class="btn rounded-full w-1/2"
          >Login</RouterLink
        >
      </div>
    </nav>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";

// pinia
import { useNavbarStore } from "@/stores/navbar";

const navbarState = useNavbarStore();
const menus = reactive(["Home", "Services", "Testimonials", "Contacts"]);
const menuActive = ref("Home");

function clickMenu(menu) {
  menuActive.value = menu;
  navbarState.closeNav();
}
</script>
