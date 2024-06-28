import { ref } from "vue";
import { defineStore } from "pinia";

export const useSideNavStore = defineStore("sideNav", () => {
  const menuActive = "Dashboard";
  const isOpen = false;
  return { menuActive, isOpen };
});
