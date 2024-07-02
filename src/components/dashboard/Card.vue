<template>
  <section
    class="flex items-center justify-between gap-0 h-12 rounded-md sm:justify-center sm:gap-5 w-3/4 sm:w-[23%] sm:h-40"
    :class="className"
  >
    <div>
      <Iconify :icon="icon" class="text-cream w-20 h-5 sm:h-8" />
    </div>
    <div
      class="text-cream sm:block flex justify-evenly gap-8 items-center w-3/4"
    >
      <h1 class="font-bold text-lg sm:text-2xl">
        {{ title }}
      </h1>
      <h3 class="text-xl font-normal">{{ value }}</h3>
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
