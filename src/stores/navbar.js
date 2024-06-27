import { ref } from "vue";
import { defineStore } from "pinia";

export const useNavbarStore = defineStore("navbar", () => {
  const isShow = ref(false);
  const openNav = () => (isShow.value = true);
  const closeNav = () => (isShow.value = false);

  return { isShow, openNav, closeNav };
});
