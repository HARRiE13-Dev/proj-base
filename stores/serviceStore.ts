import { defineStore } from "pinia";
export const useServiceStore = defineStore("service", {
  state: () => {
    return {
      drawerMobile: false,
    };
  },
  actions: {},
});
