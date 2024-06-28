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
          v-for="review in reviews"
          :key="review"
          :name="review.name"
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
// vue

// pinia
import { useReviewStore } from "@/stores/review";
const review = useReviewStore();

import TitleSection from "@/components/TitleSection.vue";
import Card from "@/components/testimonials/Card.vue";

import { reactive } from "vue";

// const reviews = reactive([
//   {
//     name: "Jessica L",
//     comment:
//       "I had an amazing experience at [Salon Name]. The staff was incredibly friendly and professional. My stylist listened to what I wanted and delivered beyond my expectations. My hair has never looked better! I will definitely be coming back.",
//     rating: 3,
//   },
//   {
//     name: "Mark T",
//     comment:
//       "I was a bit nervous about trying a new salon, but [Salon Name] was fantastic. The ambiance is relaxing, and the service is top-notch. The barber did an excellent job with my haircut, and I appreciated the attention to detail. Highly recommend!",
//     rating: 2,
//   },
//   {
//     name: "Emily R",
//     comment:
//       "I love this salon! From the moment I walked in, I felt welcomed. The receptionists are warm and the stylists are skilled. I had a manicure and pedicure, and it was the best I've ever had. The products they use are high quality, and my nails look gorgeous.",
//     rating: 4,
//   },
// ]);

const reviews = reactive(review.reviews);
</script>
