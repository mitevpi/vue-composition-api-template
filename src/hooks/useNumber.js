import { computed } from "@vue/composition-api";
import store from "../store";

export default function useNumber() {
  // const newNumber = ref("");
  const number = computed(() => store.getters.number);

  const incrementNumber = () => store.dispatch("INCREMENT_NUMBER");
  const doubleNumber = () => store.dispatch("DOUBLE_NUMBER");

  return {
    number,
    incrementNumber,
    doubleNumber
  };
}
