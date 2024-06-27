<template>
  <nav class="w-60 h-screen bg-cream-brown flex flex-col justify-between">
    <div class="flex flex-col gap-3 text-black-color">
      <h1 class="text-3xl text-primary font-bold text-center pt-10 mb-5">
        SEA SALON
      </h1>
      <RouterLink
        class="flex gap-3 items-center py-3 hover:text-cream hover:bg-primary transition-all duration-300"
        v-for="menu in menus"
        :key="menu"
      >
        <Iconify :icon="menu.icon" width="20" height="20" class="ml-10" />
        <span class="text-lg">{{ menu.name }}</span>
      </RouterLink>
    </div>
    <div class="justify-end">
      <RouterLink
        class="flex gap-3 items-center py-3 hover:text-cream hover:bg-red-500 transition-all duration-300"
      >
        <Iconify
          icon="solar:logout-2-bold"
          width="20"
          height="20"
          class="ml-10"
        />
        <span class="text-lg">Logout</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { reactive } from "vue";

const menus = reactive([
  {
    name: "Dashboard",
    icon: "ant-design:home-filled",
    path: "/",
  },
  {
    name: "Clients",
    icon: "fluent:people-team-32-filled",
    path: "/",
  },
  {
    name: "Services",
    icon: "map:beauty-salon",
    path: "/",
  },
  {
    name: "Branches",
    icon: "fluent:location-16-filled",
    path: "/",
  },
  {
    name: "Reservations",
    icon: "mingcute:invite-fill",
    path: "/",
  },
  {
    name: "Settings",
    icon: "ant-design:setting-filled",
    path: "/",
  },
]);
</script>
