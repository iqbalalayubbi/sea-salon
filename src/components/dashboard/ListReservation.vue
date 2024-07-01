<template>
  <main class="w-full px-3 mt-10 h-80 overflow-y-scroll">
    <h1 class="font-bold text-xl mb-3">Hair Style</h1>
    <section class="flex flex-col gap-3">
      <CardReservation />
      <CardReservation />
      <CardReservation />
    </section>
  </main>
</template>
<script setup>
import CardReservation from "@/components/reservation/CardReservation.vue";
</script>
