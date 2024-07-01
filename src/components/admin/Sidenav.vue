<template>
  <nav
    class="h-screen sm:fixed fixed top-0 left-0 z-50 flex flex-col justify-start sm:justify-between transition-all duration-300"
    :class="{
      'w-60': sideNavStore.isOpen,
      'w-20': !sideNavStore.isOpen,
      'bg-transparent': !navMobileActive,
      'bg-cream-brown': navMobileActive,
    }"
  >
    <!-- mobile nav -->
    <div class="sm:hidden mt-5 flex pl-3">
      <Iconify
        icon="ic:round-menu"
        width="24"
        height="24"
        @click="openMobileMenu"
        v-show="!sideNavStore.isOpen"
      />
      <Iconify
        icon="mingcute:close-fill"
        width="24"
        height="24"
        @click="closeMobileMenu"
        v-show="sideNavStore.isOpen"
      />
    </div>
    <div
      class="flex flex-col gap-3 text-black-color"
      :class="{ hidden: !navMobileActive }"
    >
      <h1
        class="font-bold text-center pt-5 sm:pt-10 mb-5 text-primary"
        :class="[sideNavStore.isOpen ? 'text-3xl' : 'text-md']"
      >
        SEA SALON
      </h1>
      <div
        class="flex gap-3 items-center py-3 hover:text-cream hover:bg-primary transition-all duration-300 hover:cursor-pointer"
        :class="{
          'text-cream bg-primary': sideNavStore.menuActive == menu.name,
        }"
        v-for="menu in menus"
        :key="menu"
        @click="sideNavStore.menuActive = menu.name"
      >
        <Iconify :icon="menu.icon" width="20" height="20" class="ml-10" />
        <span class="text-lg" v-show="sideNavStore.isOpen">{{
          menu.name
        }}</span>
      </div>
    </div>
    <div class="justify-end" :class="{ hidden: !navMobileActive }">
      <RouterLink
        to="/login"
        class="flex gap-3 items-center py-3 hover:text-cream hover:bg-red-500 transition-all duration-300 hover:cursor-pointer"
      >
        <Iconify
          icon="solar:logout-2-bold"
          width="20"
          height="20"
          class="ml-10"
        />
        <span class="text-lg" v-show="sideNavStore.isOpen">Logout</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { useSideNavStore } from "@/stores/sideNav";
// @mouseenter="sideNavStore.isOpen = true"
//     @mouseleave="sideNavStore.isOpen = false"
const navMobileActive = ref(false);
const sideNavStore = useSideNavStore();

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

function openMobileMenu() {
  sideNavStore.isOpen = true;
  navMobileActive.value = true;
}

function closeMobileMenu() {
  sideNavStore.isOpen = false;
  navMobileActive.value = false;
}

onMounted(() => {});
</script>
