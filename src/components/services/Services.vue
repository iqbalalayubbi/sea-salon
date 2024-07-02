<template>
  <main class="flex justify-center">
    <TableService v-if="!showForm" @closeForm="showForm = true" />
    <FormService v-if="showForm" @closeForm="showForm = false" />
  </main>
</template>

<script setup>
import FormService from "@/components/services/FormService.vue";
import TableService from "@/components/services/TableService.vue";
import { ref } from "vue";

const showForm = ref(false);
</script>
