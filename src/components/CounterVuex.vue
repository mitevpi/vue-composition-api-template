<template>
  <div>
    <h2>{{ "Welcome to Your Vue.js Functional API App With Vuex" }}</h2>
    <button class="myButton" @click="increment">Increment</button>
    <button class="myButton" @click="double">Double</button>

    <h3>Number is: {{ state.count }}</h3>
    <h4>{{ state.status }}</h4>
  </div>
</template>

<script>
import { reactive, computed, watch, onMounted } from "@vue/composition-api";
import store from "../store";

export default {
  setup() {
    const state = reactive({
      count: computed(() => store.getters.number),
      status: computed(() => store.getters.status),
      doubleValue: computed(() => state.count * 2),
      squareValue: computed(() => state.count * state.count)
    });

    // MATH OPERATIONS
    function increment() {
      store.dispatch("INCREMENT_NUMBER");
    }

    function double() {
      store.dispatch("DOUBLE_NUMBER");
    }

    // LIFECYCLE HOOKS
    watch(() => console.log(state.count));
    onMounted(() => store.dispatch("SET_STATUS", "Vuex Counter Loaded"));

    return {
      state,
      increment,
      double
    };
  }
};
</script>

<style scoped>
</style>
