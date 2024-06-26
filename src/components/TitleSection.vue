<template>
  <div>
    <h1 class="text-3xl text-center font-bold text-primary">{{ title }}</h1>
    <h5 class="text-lg text-center">{{ description }}</h5>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
});
</script>
