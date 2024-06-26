<template>
  <div class="flex flex-col items-center gap-2">
    <div class="avatar">
      <div class="w-40 rounded-full">
        <img :src="src" />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <h1 class="text-center text-2xl font-semibold">{{ title }}</h1>
      <p class="w-60 text-center mt-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  src: String,
});
</script>
