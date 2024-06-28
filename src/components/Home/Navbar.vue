<template>
  <div class="navbar bg-base-100 shadow-md">
    <div class="flex-1">
      <Logo />
    </div>
    <div class="flex-none">
      <button
        class="btn btn-square btn-ghost lg:hidden"
        @click="navbarState.openNav"
      >
        <Iconify
          icon="tabler:menu-deep"
          width="24"
          height="24"
          class="text-primary"
        />
      </button>
      <MainNavbar />
    </div>
  </div>
</template>

<script setup>
import { useNavbarStore } from "@/stores/navbar";
import Logo from "@/components/Home/Logo.vue";
import MainNavbar from "@/components/Home/MainNavbar.vue";

const navbarState = useNavbarStore();
</script>
