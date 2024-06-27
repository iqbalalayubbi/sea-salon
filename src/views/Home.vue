<template>
  <main class="h-screen relative" id="home">
    <Navbar class="fixed top-0 z-50" />
    <HeroSection class="px-4 mt-10" />
  </main>
</template>

<script setup>
import Navbar from "@/components/Home/Navbar.vue";
import HeroSection from "@/components/Home/HeroSection.vue";
</script>
