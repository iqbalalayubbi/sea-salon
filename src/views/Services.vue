<template>
  <main class="flex flex-col items-center mt-10">
    <!-- title -->
    <TitleSection
      title="Our Service"
      description="Many benefit in this salon with your style"
    />
    <!-- cards -->
    <section class="flex flex-col items-center gap-8 mt-10">
      <Card
        v-for="service in services"
        :key="service"
        :src="service.image"
        :title="service.title"
        :description="service.description"
      />
    </section>
  </main>
</template>

<script setup>
import TitleSection from "@/components/TitleSection.vue";
import Card from "@/components/services/Card.vue";
import { reactive } from "vue";

const services = reactive([
  {
    title: "Haircuts and Styling",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "set your styling raambut now from this service.",
  },
  {
    title: "Manicure and Pedicure",
    image:
      "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "set your styling raambut now from this service.",
  },
  {
    title: "Facial Treatments",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "set your styling raambut now from this service.",
  },
]);
</script>
