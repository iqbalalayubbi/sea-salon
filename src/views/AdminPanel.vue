<template>
  <main class="flex">
    <Sidenav />
    <AdminContent class="mt-10 sm:mt-20 flex-1" />
  </main>
</template>

<script setup>
import Sidenav from "@/components/admin/Sidenav.vue";
import AdminContent from "@/views/AdminContent.vue";
</script>
