<template>
  <main class="mt-10 flex flex-col items-center gap-5 px-10" id="testimonials">
    <TitleSection
      title="Testimonials"
      description="what those who have used the service say"
    />
    <div
      class="mt-10 lg:w-full lg:overflow-x-scroll flex pb-5"
      :class="{
        'justify-start': review.getTotalReview() > 2,
        'justify-center': review.getTotalReview() <= 2,
      }"
    >
      <div
        class="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:space-x-4 px-5"
      >
        <Card
          v-for="review in review.reviews"
          :key="review"
          :name="review.fullName"
          :comment="review.comment"
          :rating="review.rating"
        />
      </div>
    </div>
    <RouterLink to="/review" class="btn btn-primary w-3/4 text-lg mt-5 lg:w-1/4"
      >Give your review</RouterLink
    >
  </main>
</template>

<script setup>
// pinia
import { useReviewStore } from "@/stores/review";
const review = useReviewStore();

// components
import TitleSection from "@/components/TitleSection.vue";
import Card from "@/components/testimonials/Card.vue";

review.getAllReview();
</script>
