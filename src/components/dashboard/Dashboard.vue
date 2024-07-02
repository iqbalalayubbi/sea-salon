<template>
  <main class="flex flex-col items-center">
    <div
      class="flex flex-col items-center gap-2 sm:flex-row sm:gap-5 justify-center w-full"
    >
      <Card
        v-for="info in cardInformations"
        :key="info"
        :title="info.title"
        :value="info.value"
        :icon="info.icon"
        :className="info.color"
      />
    </div>
    <TableReservation class="hidden sm:block" />
    <ListReservation class="block sm:hidden" />
  </main>
</template>

<script setup>
import { reactive } from "vue";

import Card from "@/components/dashboard/Card.vue";
import TableReservation from "@/components/dashboard/TableReservation.vue";
// import CardReservation from "@/components/reservation/CardReservation.vue";
import ListReservation from "@/components/dashboard/ListReservation.vue";

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
