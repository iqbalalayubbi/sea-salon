import { ref } from "vue";
import { defineStore } from "pinia";
import apiClient from "@/api";

export const useServiceStore = defineStore("service", () => {
  const services = ref([]);
  const getServices = async (branchId) => {
    try {
      const token = localStorage.getItem("token");
      const result = await apiClient.get(`/service/${branchId}?token=${token}`);
      const response = result.data;
      services.value = response.data.services;
    } catch (error) {
      return error.message;
    }
  };
  const createService = async (branchId, service) => {
    try {
      const token = localStorage.getItem("token");
      const result = await apiClient.put(
        `/service/${branchId}?token=${token}`,
        service
      );
      const response = result.data;
      if (response.isSuccess) return true;
      return false;
    } catch (error) {
      return error;
    }
  };

  return { services, getServices, createService };
});
