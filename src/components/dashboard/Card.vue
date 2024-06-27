<template>
  <section
    class="bg-blue-500 flex items-center justify-center gap-5 w-[23%] h-40 rounded-md"
    :class="className"
  >
    <div>
      <Iconify :icon="icon" width="40" height="40" class="text-cream" />
    </div>
    <div class="text-cream">
      <h1 class="font-bold text-2xl">{{ title }}</h1>
      <h3 class="text-xl">{{ value }}</h3>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
});
</script>
