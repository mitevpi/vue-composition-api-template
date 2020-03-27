<template>
  <div>
    <h2>{{ "Welcome to Your Vue.js Functional API App With Vuex" }}</h2>
    <button class="myButton" @click="incrementNumber">Increment</button>
    <button class="myButton" @click="doubleNumber">Double</button>

    <h3>Number is: {{ number }}</h3>
    <h4>{{ status }}</h4>
  </div>
</template>

<script>
import { watch, onMounted } from "@vue/composition-api";
import useNumber from "../hooks/useNumber";
import useStatus from "../hooks/useStatus";

export default {
  setup() {
    const { number, incrementNumber, doubleNumber } = useNumber();
    const { status, setStatus } = useStatus();

    // LIFECYCLE HOOKS
    watch(number, () => console.log(number.value));
    onMounted(() => setStatus("Vuex Counter Loaded"));

    return {
      number,
      status,
      incrementNumber,
      doubleNumber,
      setStatus
    };
  }
};
</script>

<style scoped></style>
