import { ref, computed } from "vue";
import { defineStore } from "pinia";
import apiClient from "@/api";

export const useBranchStore = defineStore("branch", () => {
  const branches = ref([]);
  const branchActive = ref("");

  async function getBranches() {
    const token = localStorage.getItem("token");
    const result = await apiClient.get("/branch?token=" + token);
    const response = result.data;
    branches.value = response.data;
    return response.data;
  }

  async function deleteBranch(branchId) {
    const token = localStorage.getItem("token");
    const result = await apiClient.delete(`/branch/${branchId}?token=${token}`);
    const response = result.data;
    if (response.isSuccess) {
      branches.value = branches.value.filter((b) => b.id !== branchId);
    }
    return response.isSuccess;
  }

  return { getBranches, deleteBranch, branchActive };
});
