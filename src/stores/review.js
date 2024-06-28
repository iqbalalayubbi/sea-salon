import { ref } from "vue";
import { defineStore } from "pinia";

export const useReviewStore = defineStore("review", () => {
  const reviews = ref([
    {
      name: "Jessica L",
      comment:
        "I had an amazing experience at [Salon Name]. The staff was incredibly friendly and professional. My stylist listened to what I wanted and delivered beyond my expectations. My hair has never looked better! I will definitely be coming back.",
      rating: 3,
    },
  ]);
  const addReview = (review) => {
    reviews.value.push(review);
  };
  const getTotalReview = () => {
    return reviews.value.length;
  };

  return { reviews, addReview, getTotalReview };
});
