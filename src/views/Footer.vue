<template>
  <footer
    class="mt-10 footer bg-cream-brown text-black-color flex flex-col md:flex-row md:justify-evenly md:py-10 items-center"
    id="contacts"
  >
    <aside class="mt-10">
      <h1 class="text-3xl text-primary font-bold">SEA SALON</h1>
    </aside>
    <nav class="flex flex-col items-center">
      <h6 class="footer-title">Services</h6>
      <a class="link link-hover" v-for="service in services" :key="service">
        {{ service }}
      </a>
    </nav>
    <nav class="flex flex-col items-center">
      <h6 class="footer-title">Menu</h6>
      <a class="link link-hover" v-for="menu in menus" :key="menu">
        {{ menu }}
      </a>
    </nav>
    <nav class="flex flex-col items-center mb-10">
      <h6 class="footer-title">Contact</h6>
      <a class="link link-hover flex gap-2">
        <Iconify icon="carbon:phone" width="16" height="16" />
        08123456789 (Thomas)
      </a>
      <a class="link link-hover flex gap-2">
        <Iconify icon="carbon:phone" width="16" height="16" />
        08123456789 (Sekar)
      </a>
    </nav>
  </footer>
</template>

<script setup>
import { reactive } from "vue";

const services = reactive([
  "Haircuts and Styling",
  "Manicure and Pedicure",
  "Facial Treatments",
]);

const menus = reactive(["Home", "Services", "Testimonials"]);
</script>
