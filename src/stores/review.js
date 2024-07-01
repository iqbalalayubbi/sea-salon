import { ref } from "vue";
import { defineStore } from "pinia";
import apiClient from "@/api";

export const useReviewStore = defineStore("review", () => {
  const reviews = ref([
    // {
    //   name: "Jessica L",
    //   comment:
    //     "I had an amazing experience at [Salon Name]. The staff was incredibly friendly and professional. My stylist listened to what I wanted and delivered beyond my expectations. My hair has never looked better! I will definitely be coming back.",
    //   rating: 3,
    // },
  ]);
  const addReview = async (review) => {
    const result = await apiClient.post("/review", review);
    const response = result.data;
    if (response.isSuccess) return reviews.value.push(review);
  };
  const getTotalReview = () => {
    return reviews.value.length;
  };
  const getAllReview = async () => {
    const result = await apiClient.get("/review");
    const response = result.data;
    reviews.value = response.data;
  };

  return { reviews, addReview, getTotalReview, getAllReview };
});
