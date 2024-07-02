<template>
  <main>
    <h1 class="text-center font-bold text-3xl mb-5">Create New Branch</h1>
    <form
      @submit.prevent="createBranch"
      class="flex flex-col items-center gap-3"
    >
      <input
        type="text"
        placeholder="Enter branch name"
        class="input input-bordered w-full max-w-xs bg-cream-brown"
        v-model="newBranch.branchName"
      />
      <select
        v-model="newBranch.location"
        class="select select-bordered w-full max-w-xs bg-cream-brown"
      >
        <option disabled selected>Location</option>
        <option v-for="city in cities" :key="city">
          {{ city }}
        </option>
      </select>
      <!-- opening -->
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Opening</span>
        </div>
        <input
          v-model="newBranch.openingTime"
          type="time"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs bg-cream-brown"
        />
      </label>
      <!-- closing -->
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Closing</span>
        </div>
        <input
          v-model="newBranch.closingTime"
          type="time"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs bg-cream-brown"
        />
      </label>
      <div class="w-full max-w-xs mt-5">
        <button class="btn btn-primary w-full" type="submit">
          Create Branch
        </button>
        <button
          @click="closeForm"
          type="button"
          class="btn btn-secondary w-full mt-3"
        >
          Back
        </button>
      </div>
    </form>
  </main>
</template>

<script setup>
import apiClient from "@/api";
import { onMounted, reactive } from "vue";
import { useBranchStore } from "@/stores/branch";

const branchStore = useBranchStore();
const cities = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Bekasi",
  "Tangerang",
  "Depok",
  "Semarang",
  "Palembang",
  "Makassar",
];

const emit = defineEmits(["closeForm"]);
const newBranch = reactive({
  branchName: "",
  location: "",
  openingTime: "",
  closingTime: "",
});

function closeForm() {
  emit("closeForm");
}

async function createBranch() {
  const token = localStorage.getItem("token");
  try {
    const result = await apiClient.post("/branch?token=" + token, newBranch);
    const response = result.data;
    if (response.isSuccess) {
      await branchStore.getBranches();
      emit("closeForm");
    }
  } catch (error) {
    console.log(error.response);
  }
}
</script>
