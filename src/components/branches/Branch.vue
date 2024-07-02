<template>
  <main class="flex justify-center">
    <TableBranch @showForm="showForm = true" v-if="!showForm" />
    <FormBranch v-if="showForm" @closeForm="showForm = false" />
  </main>
</template>

<script setup>
import TableBranch from "@/components/branches/TableBranch.vue";
import FormBranch from "@/components/branches/FormBranch.vue";

import { ref } from "vue";

const showForm = ref(false);
</script>
