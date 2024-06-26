<template>
  <main>
    <h1 class="font-bold text-primary text-center text-3xl mt-10 mb-8">
      Reservation Now
    </h1>
    <section class="flex flex-col items-center gap-3">
      <input
        :type="input.type"
        :placeholder="input.placeholder"
        class="input input-bordered w-full max-w-xs bg-cream-brown"
        v-for="input in inputs"
        :key="input"
      />
      <select class="select select-bordered w-full max-w-xs bg-cream-brown">
        <option disabled selected>Choose service</option>
        <option>Haircuts and Styling</option>
        <option>Manicure and Pedicure</option>
        <option>Facial Treatments</option>
      </select>
      <button class="btn btn-primary w-full max-w-xs mt-5">
        Make Reservation
      </button>
    </section>
  </main>
</template>
<script setup>
import { reactive } from "vue";

const inputs = reactive([
  {
    type: "text",
    placeholder: "Enter your name",
  },
  {
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    type: "date",
    placeholder: "Reservation Date",
  },
  {
    type: "time",
    placeholder: "Reservation Time",
  },
]);
</script>
