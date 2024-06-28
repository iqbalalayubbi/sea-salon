<template>
  <div class="card bg-base-100 w-96 shadow-xl flex-shrink-0">
    <figure>
      <img
        src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Shoes"
        width="200"
      />
    </figure>
    <div class="card-body flex flex-col items-center">
      <h2 class="card-title">{{ name }}</h2>
      <p class="text-center h-40">
        {{ comment }}
      </p>
      <div class="rating mt-5">
        <input
          type="radio"
          name="rating-2"
          class="mask mask-star-2 bg-orange-400"
          v-for="i in rating"
          :key="i"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
  name: String,
  comment: String,
  rating: Number,
});
</script>
