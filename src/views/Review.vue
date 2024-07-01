<template>
  <main class="mt-10 flex flex-col items-center gap-5">
    <TitleSection
      title="Give Your Review"
      description="your review is very important for we"
    />
    <FormReview @inputChange="inputChange" />
    <div class="w-3/4 flex flex-col gap-3">
      <RouterLink to="/" class="btn btn-primary w-full text" @click="addReview">
        Add Review
      </RouterLink>
      <RouterLink to="/" class="btn btn-neutral w-full rounded-full"
        >Back</RouterLink
      >
    </div>
  </main>
</template>

<script setup>
// vue
import { ref } from "vue";

// pinia
import { useReviewStore } from "@/stores/review.js";

const review = useReviewStore();

// components
import TitleSection from "@/components/TitleSection.vue";
import FormReview from "@/components/review/FormReview.vue";

const name = ref("");
const comment = ref("");
const rating = ref("");

function inputChange(input, value) {
  switch (input) {
    case "name":
      name.value = value;
      break;
    case "comment":
      comment.value = value;
      break;
    default:
      rating.value = value;
      break;
  }
}

async function addReview() {
  await review.addReview({
    fullName: name.value,
    comment: comment.value,
    rating: rating.value,
  });
}
</script>
