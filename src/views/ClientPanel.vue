<template>
  <main class="mx-5">
    <nav class="flex justify-between mt-5">
      <RouterLink to="/login">
        <Iconify
          icon="solar:logout-2-outline"
          width="24"
          height="24"
          class="text-red-500"
        />
      </RouterLink>
      <RouterLink to="/profile">
        <Iconify
          icon="iconamoon:profile"
          width="24"
          height="24"
          class="text-black-color"
        />
      </RouterLink>
    </nav>
    <section class="mt-20">
      <div class="flex justify-between items-center mb-5">
        <h3 class="font-bold text-xl">Reservation</h3>
        <RouterLink to="/reservation" class="btn btn-primary"
          >Make Reservation</RouterLink
        >
      </div>
      <div
        class="flex flex-col items-center w-full gap-3 h-96 overflow-y-scroll"
      >
        <CardReservation class="w-full" />
        <CardReservation class="w-full" />
        <CardReservation class="w-full" />
        <CardReservation class="w-full" />
        <CardReservation class="w-full" />
        <CardReservation class="w-full" />
        <CardReservation class="w-full" />
      </div>
    </section>
  </main>
</template>

<script setup>
import CardReservation from "@/components/reservation/CardReservation.vue";
</script>
