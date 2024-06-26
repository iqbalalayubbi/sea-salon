<template>
  <main class="mt-10 flex flex-col items-center gap-5">
    <TitleSection
      title="Give Your Review"
      description="your review is very important for we"
    />
    <FormReview />
    <div class="w-3/4 flex flex-col gap-3">
      <button class="btn btn-primary w-full text">Add Review</button>
      <button class="btn btn-neutral w-full rounded-full">Back</button>
    </div>
  </main>
</template>

<script setup>
import TitleSection from "@/components/TitleSection.vue";
import FormReview from "@/components/review/FormReview.vue";
</script>
