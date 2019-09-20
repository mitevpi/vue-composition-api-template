<template>
  <div>
    <h2>{{ "HI" }}</h2>
    <button class="myButton" @click="increment">Increment</button>
    <button class="myButton" @click="double">Double</button>

    <h3>Number is: {{ state.count }}</h3>
    <h4>{{ state.status }}</h4>
  </div>
</template>

<script>
import { reactive, computed, watch, onMounted } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      count: 0,
      status: "",
      doubleValue: computed(() => state.count * 2),
      squareValue: computed(() => state.count * state.count)
    });

    // MATH OPERATIONS
    function increment() {
      state.count++;
      state.status = "Incremented";
    }

    function double() {
      state.count *= 2;
      state.status = "Doubled";
    }

    // STATUS OPERATIONS
    function welcomeMessage() {
      state.status = "App Loaded";
    }

    // LIFECYCLE HOOKS
    watch(() => console.log(state.count));

    onMounted(() => welcomeMessage());

    return {
      state,
      increment,
      double
    };
  }
};
</script>

<style scoped>
button {
  margin: 5px 5px 5px 5px;
}
.myButton {
  background-color: #44c767;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  padding: 10px 20px;
  text-decoration: none;
}
.myButton:hover {
  background-color: #5cbf2a;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>
