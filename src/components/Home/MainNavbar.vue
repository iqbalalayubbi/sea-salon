<template>
  <ul class="hidden lg:flex gap-10 items-center text-black-color">
    <li
      class="hover:text-primary hover:cursor-pointer"
      v-for="menu in menus"
      :key="menu"
    >
      <a href="#home"></a>{{ menu }}
    </li>
    <li class="flex gap-3">
      <RouterLink to="/login" class="btn btn-secondary w-24">Login</RouterLink>
      <RouterLink to="/register" class="btn btn-primary w-24"
        >Register</RouterLink
      >
    </li>
  </ul>
</template>

<script setup>
import { reactive } from "vue";

const menus = reactive(["Home", "Services", "Testimonials", "Contacts"]);
</script>
