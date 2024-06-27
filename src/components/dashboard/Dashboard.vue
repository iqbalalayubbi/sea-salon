<template>
  <main>
    <div class="flex gap-5 justify-center">
      <Card
        v-for="info in cardInformations"
        :key="info"
        :title="info.title"
        :value="info.value"
        :icon="info.icon"
        :className="info.color"
      />
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";

import Card from "@/components/dashboard/Card.vue";

const cardInformations = reactive([
  {
    icon: "fluent:people-team-32-filled",
    title: "Members",
    value: "230",
    color: "bg-green-400",
  },
  {
    icon: "map:beauty-salon",
    title: "Services",
    value: "10",
    color: "bg-purple-400",
  },
  {
    icon: "fluent:location-16-filled",
    title: "Branches",
    value: "4",
    color: "bg-orange-400",
  },
  {
    icon: "mingcute:invite-fill",
    title: "Reservation",
    value: "7",
    color: "bg-pink-400",
  },
]);
</script>
