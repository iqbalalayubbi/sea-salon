<template>
  <main class="w-screen">
    <MobileMenu />
    <Home />
    <Services />
    <Testimonials />
    <Footer />
  </main>
</template>

<script setup>
// vue
import { ref } from "vue";

// components
import MobileMenu from "@/components/Home/MobileMenu.vue";
import Home from "@/views/Home.vue";
import Services from "@/views/Services.vue";
import Testimonials from "@/views/Testimonials.vue";
import Footer from "@/views/Footer.vue";
</script>
