<template>
  <section
    class="bg-cream-brown rounded-md flex flex-col items-center gap-5 py-10 w-[95%]"
  >
    <input
      type="text"
      placeholder="Your name..."
      class="input input-bordered w-full max-w-xs"
      @input="inputChange('name', name)"
      v-model="name"
    />
    <textarea
      class="textarea textarea-bordered w-full max-w-xs h-40"
      placeholder="Your review..."
      v-model="comment"
      @input="inputChange('comment', comment)"
    ></textarea>
    <div class="rating">
      <input
        type="radio"
        name="rating-2"
        class="mask mask-star-2"
        v-for="i in 5"
        :key="i"
        :checked="i == selectedRating"
        :class="{ 'bg-orange-400': isSelected }"
        @click="isSelected = true"
        @input="inputChange('rating', i)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selectedRating = ref(0);
const isSelected = ref(false);
const name = ref("");
const comment = ref("");
const emit = defineEmits(["inputChange"]);

function inputChange(input, value) {
  emit("inputChange", input, value);
}
</script>
