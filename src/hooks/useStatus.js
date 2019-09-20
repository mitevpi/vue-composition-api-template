import { computed } from "@vue/composition-api";
import store from "../store";

export default function useNumber() {
  const status = computed(() => store.getters.status);

  const setStatus = payload => store.dispatch("SET_STATUS", payload);

  return {
    status,
    setStatus
  };
}
